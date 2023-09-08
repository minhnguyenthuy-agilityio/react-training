import { useState } from "react";

import { Box, Flex } from "@chakra-ui/react";

import { DefaultLayout } from "@/layouts";

import { TableHeader, TableContent } from "@/components";

import { TaskProvider } from "@/contexts";

export const TaskPage = () => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (value: string): void => {
    setKeyword(value);
  };

  return (
    <DefaultLayout pageName="Explore Task">
      <TaskProvider>
        <Flex direction="column" h="full" w="full">
          <TableHeader onSearch={handleSearch} />
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
            <TableContent keyword={keyword} />
          </Box>
        </Flex>
      </TaskProvider>
    </DefaultLayout>
  );
};
