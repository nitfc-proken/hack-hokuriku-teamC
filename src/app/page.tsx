"use client";
import { useState } from "react";
import { Box, Text, Input, Button } from "@chakra-ui/react";
import SuggestionBox from "../components/SuggestionBox";
import { LocationMap, LatLng, UseCurrentPosition } from "../components/map/map";
import { suggestions, positionList } from "../data/data";

export default function HomePage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [threshold, setThreshold] = useState<number>(1000); // デフォルトの距離を1kmに設定
  const [thresholdPrev, setThresholdPrev] = useState<number>(1000); // 前回の距離を保持
  const [inputDistance, setInputDistance] = useState<string>("1000"); // inputの値を格納

  const handleSuggestionClick = (index: number) => {
    setSelectedIndex(index);
    console.log(`Selected index: ${index}`);
  };

  const handleDistanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputDistance(value);
    setThresholdPrev(parseInt(value, 10)); // 入力された値をthresholdにセット
  };

  const handleSubmitDistance = () => {
    console.log(`指定された距離: ${threshold} メートル`);
    setThreshold(thresholdPrev); // thresholdPrevの値をthresholdにセット
  };

  function calculateDistance(point1: LatLng, point2: LatLng): number {
    const R = 6371e3; // 地球の半径 (メートル)
    const φ1 = (point1.lat * Math.PI) / 180; // 緯度をラジアンに変換
    const φ2 = (point2.lat * Math.PI) / 180; // 緯度をラジアンに変換
    const Δφ = ((point2.lat - point1.lat) * Math.PI) / 180; // 緯度の差
    const Δλ = ((point2.lng - point1.lng) * Math.PI) / 180; // 経度の差

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
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
        top="12%"
        transform="translate(-50%, -50%)"
        width="80%" // 横幅80%に設定
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
        {/* 距離を指定する入力フィールドとボタン */}
        <Box mt={4}>
          <Input
            value={inputDistance}
            onChange={handleDistanceChange}
            placeholder="距離をメートル単位で入力"
            size="md"
            width="70%"
            marginBottom={2}
            textAlign="center"
          />
          <Button onClick={handleSubmitDistance} colorScheme="teal" size="sm">
            距離を設定
          </Button>
        </Box>
      </Box>

      <LocationMap
        positionList={nearPositionList}
        centerPosition={nearPositionList[selectedIndex ?? 0]}
      />

      <SuggestionBox
        suggestions={nearSuggestions}
        onClick={handleSuggestionClick}
      />
    </Box>
  );
}
