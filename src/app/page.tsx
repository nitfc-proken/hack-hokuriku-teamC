"use client";
import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import SuggestionBox from "../components/SuggestionBox";
import { LocationMap, LatLng, UseCurrentPosition } from "../components/map/map";
import { suggestions, positionList } from "../data/data";

export default function HomePage() {
 const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

 const handleSuggestionClick = (index: number) => {
  setSelectedIndex(index);
  console.log(`Selected index: ${index}`);
 };

 function calculateDistance(point1: LatLng, point2: LatLng): number {
  const R = 6371e3; // 地球の半径 (メートル)
  const φ1 = (point1.lat * Math.PI) / 180; // 緯度をラジアンに変換
  const φ2 = (point2.lat * Math.PI) / 180; // 緯度をラジアンに変換
  const Δφ = ((point2.lat - point1.lat) * Math.PI) / 180; // 緯度の差
  const Δλ = ((point2.lng - point1.lng) * Math.PI) / 180; // 経度の差

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // 距離 (メートル)
 }

 const currentPosition = UseCurrentPosition();
 let currentFacility = null;
 // positionListの中から現在地に最も近い施設を探す
 if (currentPosition) {
  let minDistance = Infinity;
  for (let i = 0; i < positionList.length; i++) {
   const distance = calculateDistance(currentPosition, positionList[i]);
   if (distance < minDistance) {
    minDistance = distance;
    currentFacility = suggestions[i];
   }
  }
 }

 let nearSuggestions = suggestions;
 let nearPositionList = positionList;
 const threshold = 1000; // 1km以内の施設を表示
 if (currentPosition) {
  nearSuggestions = suggestions.filter((_, i) => {
   return calculateDistance(currentPosition, positionList[i]) < threshold;
  });
  nearPositionList = positionList.filter((_, i) => {
   return calculateDistance(currentPosition, positionList[i]) < threshold;
  });
 }

 return (
  <Box position="relative" height="100vh">
   <Box
    position="absolute"
    left="50%"
    top="7%"
    transform="translate(-50%, -50%)"
    width="300px" // 横幅80%に設定
    bg="white"
    color="teal.400"
    borderRadius="lg"
    boxShadow="md"
    py={4}
    zIndex={10}
    textAlign="center"
   >
    <Text fontSize="2xl" fontWeight="bold">
     観光おすすめマップ
    </Text>
   </Box>

   <LocationMap positionList={nearPositionList} centerPosition={nearPositionList[selectedIndex ?? 0]} />

   <SuggestionBox suggestions={nearSuggestions} onClick={handleSuggestionClick} />
  </Box>
 );
}
