"use client";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
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

 return (
  <Box>
   <h1>{currentFacility?.title}</h1>
   <LocationMap positionList={positionList} centerPosition={positionList[selectedIndex ?? 0]} />
   <SuggestionBox suggestions={suggestions} onClick={handleSuggestionClick} />
  </Box>
 );
}
