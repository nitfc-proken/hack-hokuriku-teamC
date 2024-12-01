// src/components/FullScreenMap.tsx
import { Box, Image } from '@chakra-ui/react';

export const FullScreenMap = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      position="relative"
      overflow="hidden"
    >
      <Image
        src="/map-placeholder.png" // 仮画像のパス
        alt="Map Placeholder"
        objectFit="cover"
        w="100%"
        h="100%"
      />
    </Box>
  );
};

export default FullScreenMap;
