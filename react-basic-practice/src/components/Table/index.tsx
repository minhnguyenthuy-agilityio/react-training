import { Box, Flex } from "@chakra-ui/react";
import { TableContent, TableHeader } from "@/components";

export const Table = () => {
  return (
    <Flex direction="column" h="full" w="full">
      <TableHeader />
      <Box
        py={{ sm: 6, lg: 8 }}
        pl={{ sm: 6, lg: 8 }}
        pr={{ sm: 6, lg: 0 }}
        flex={1}
        overflowX="hidden"
        w={{
          sm: "100vw",
          lg: "calc(100vw - 180px)",
          xl: "calc(100vw - 252px)",
        }}
        overflowY="auto"
      >
        <TableContent />
      </Box>
    </Flex>
  );
};
