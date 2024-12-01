"use client";
import { Box } from "@chakra-ui/react";
import SuggestionBox from "../components/SuggestionBox";
import { LocationMap, LatLng } from "../components/map/map";

export default function HomePage() {
	const suggestions = [
		{
			image: "/001_s.jpg",
			title: "東尋坊",
			badge: "新着",
			description: "東尋坊は福井を代表する名所です。ポケモンGoでも有名です。",
		},
		{
			image: "/asakurasi.jpg",
			title: "朝倉氏遺跡",
			badge: "人気",
			description:
				"朝倉氏遺跡は福井を代表する名所です。ポケモンGoでも有名です。",
		},
		{
			image: "/hotaikonotaki.jpg",
			title: "五太子の滝",
			badge: "注目",
			description:
				"五太子の滝は福井を代表する名所です。ポケモンGoでも有名です。",
		},
		{
			image: "/youkou.jpg",
			title: "名勝 養浩館庭園",
			badge: "注目",
			description:
				"養浩館庭園は福井を代表する名所です。ポケモンGoでも有名です。",
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
