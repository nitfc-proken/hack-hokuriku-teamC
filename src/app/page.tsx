"use client";
import SuggestionBox from "../components/SuggestionBox";
import { Box } from "@chakra-ui/react";

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

  return (
    <Box>
      <SuggestionBox suggestions={suggestions} />
    </Box>
  );
}
