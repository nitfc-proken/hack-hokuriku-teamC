"use client";
import { Box } from "@chakra-ui/react";
import SuggestionBox from "../components/SuggestionBox";
import { LocationMap, LatLng } from "../components/map/map";

export default function HomePage() {
  const suggestions = [
    {
      image: "/map-placeholder.png",
      title: "おすすめマップ 1",
      badge: "新着",
      description: "このマップは新しい地図です。詳細な情報を確認できます。",
    },
    {
      image: "/map-placeholder.png",
      title: "おすすめマップ 2",
      badge: "人気",
      description: "多くのユーザーに人気のある地図です。",
    },
    {
      image: "/map-placeholder.png",
      title: "おすすめマップ 3",
      badge: "注目",
      description: "注目のエリアを特集した地図です。",
    },
    {
      image: "/map-placeholder.png",
      title: "おすすめマップ 4",
      badge: "注目",
      description: "注目のエリアを特集した地図です。",
    },
    {
      image: "/map-placeholder.png",
      title: "おすすめマップ 3",
      badge: "注目",
      description: "注目のエリアを特集した地図です。",
    },
    {
      image: "/map-placeholder.png",
      title: "おすすめマップ 4",
      badge: "注目",
      description: "注目のエリアを特集した地図です。",
    },
  ];

  const positionList: LatLng[] = [
    // 金沢駅
    { lat: 36.578081827075, lng: 136.6478205667 },
    // 兼六園
    { lat: 36.561325, lng: 136.656205 },
    // 21世紀美術館
    { lat: 36.561204, lng: 136.656763 },
  ];

  return (
    <Box>
      <LocationMap
        positionList={positionList}
        centerPosition={positionList[0]}
      />
      <SuggestionBox suggestions={suggestions} />
    </Box>
  );
}
