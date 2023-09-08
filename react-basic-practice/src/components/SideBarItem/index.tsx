import { ReactNode } from "react";
import { Flex, Text, Box } from "@chakra-ui/react";

interface SideBarItemProps {
  icon: ReactNode;
  name: string;
}

export const SideBarItem = ({ icon, name }: SideBarItemProps) => (
  <Flex
    mb={6}
    textTransform="capitalize"
    fontWeight="semibold"
    py={2.5}
    px={5}
    alignItems="center"
    color="secondary.300"
    _hover={{ background: "light.300", color: "secondary.500" }}
  >
    <Box fontSize="24px">{icon}</Box>
    <Text color="" ml={3}>
      {name}
    </Text>
  </Flex>
);
