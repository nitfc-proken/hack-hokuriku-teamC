"use client";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
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
    <Box>
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
