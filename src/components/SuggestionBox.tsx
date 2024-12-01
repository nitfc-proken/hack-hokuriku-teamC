import {
  Box,
  Text,
  VStack,
  Button,
  Image,
  Badge,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

// Suggestionの型を定義
interface Suggestion {
  image: string;
  title: string;
  badge: string;
  description: string;
}

interface SuggestionBoxProps {
  suggestions: Suggestion[]; // サジェスト内容をオブジェクト配列で受け取る
  onClick: (index: number) => void; // クリック時のコールバック関数
}

const SuggestionBox = ({ suggestions, onClick }: SuggestionBoxProps) => {
  const [isOpen, setIsOpen] = useState(false); // サジェストの開閉状態を管理

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box position="fixed" bottom={0} w="100%" h="50%" p={4}>
      {/* トグルボタン */}
      <Button
        onClick={toggleBox}
        colorScheme="teal"
        width="100px"
        transform={isOpen ? "translateY(0)" : "translateY(35vh)"}
        transition="transform 0.3s ease-in-out"
        mb={2}
        borderRadius="full"
      >
        {isOpen ? "閉じる" : "表示"}
      </Button>

      <Box
        bg="gray.100"
        borderRadius="md"
        boxShadow="md"
        h="100%"
        transform={isOpen ? "translateY(0)" : "translateY(35vh)"}
        transition="transform 0.3s ease-in-out"
        overflow="hidden"
      >
        {/* スクロール可能なエリア */}
        <Box
          overflowY="auto"
          maxHeight="calc(100% - 30px)" // ボタンの高さを考慮して調整
          p={4}
          css={{
            /* スクロールバーのスタイル */
            "&::-webkit-scrollbar": {
              width: "8px", // 幅を狭くする
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#14b8a6", // サムの色を変更
              borderRadius: "8px", // 丸みをつける
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#0d9488", // ホバー時の色
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#f1f1f1", // トラックの色
            },
          }}
        >
          <VStack spacing={3}>
            <Text fontSize="xl" fontWeight="bold">
              おすすめマップ
            </Text>
            {suggestions.map((suggestion, index) => (
              <Box
                key={index}
                bg="white"
                p={4}
                borderRadius="md"
                boxShadow="md"
                w="100%"
                mb={4}
                onClick={() => {
                  onClick(index);
                }}
              >
                <Stack direction="row" spacing={4}>
                  {/* 画像 */}
                  <Image
                    src={suggestion.image}
                    alt={suggestion.title}
                    boxSize="100px"
                    objectFit="cover"
                    borderRadius="md"
                  />

                  <VStack align="start" spacing={1} w="full">
                    {/* タイトル */}
                    <Text fontSize="xl" fontWeight="bold">
                      {suggestion.title}
                    </Text>

                    {/* バッジ */}
                    <Badge colorScheme="teal">{suggestion.badge}</Badge>

                    {/* 説明文 */}
                    <Text>{suggestion.description}</Text>
                  </VStack>
                </Stack>
              </Box>
            ))}
            <Text fontSize="sm" color="gray.500" textAlign="center">
              画像参照元: 福井市 写真ギャラリー
              https://www.city.fukui.lg.jp/photo/index.html
            </Text>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default SuggestionBox;
