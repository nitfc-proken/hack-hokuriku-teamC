"use client";
import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import SuggestionBox from "../components/SuggestionBox";
import { LocationMap, LatLng } from "../components/map/map";
import { suggestions, positionList } from "../data/data";

export default function HomePage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSuggestionClick = (index: number) => {
    setSelectedIndex(index);
    console.log(`Selected index: ${index}`);
  };

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

      <LocationMap
        positionList={positionList}
        centerPosition={positionList[selectedIndex ?? 0]}
      />

      <SuggestionBox
        suggestions={suggestions}
        onClick={handleSuggestionClick}
      />
    </Box>
  );
}
