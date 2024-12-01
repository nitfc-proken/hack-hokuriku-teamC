// src/components/SuggestionBox.tsx
import { Box, Text, VStack, Button } from '@chakra-ui/react';
import { useState } from 'react';

interface SuggestionBoxProps {
  suggestions: string[]; // サジェスト内容を配列で受け取る
}

const SuggestionBox = ({ suggestions }: SuggestionBoxProps) => {
  const [isOpen, setIsOpen] = useState(false); // サジェストの開閉状態を管理

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box position="fixed" bottom={0} w="100%" p={4}>
      {/* トグルボタン */}
      <Button
        onClick={toggleBox}
        colorScheme="teal"
        width="100px"
        mb={2}
        borderRadius="full"
      >
        {isOpen ? "閉じる" : "表示"}
      </Button>

      <Box
        bg="gray.100"
        borderRadius="md"
        boxShadow="md"
        transform={isOpen ? "translateY(0)" : "translateY(100%)"}
        transition="transform 0.3s ease-in-out"
        overflow="hidden"
      >
        <VStack spacing={3} p={4}>
          {suggestions.map((suggestion, index) => (
            <Text key={index} fontSize="lg">
              {suggestion}
            </Text>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default SuggestionBox;
