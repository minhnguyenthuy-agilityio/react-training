import { ReactNode } from "react";
import { Flex, Text } from "@chakra-ui/react";

interface SideBarItemProps {
  icon: ReactNode;
  name: string;
  isActive: boolean;
}

export const SideBarItem = ({ icon, name, isActive }: SideBarItemProps) => (
  <Flex
    mb={6}
    textTransform="capitalize"
    fontWeight="semibold"
    borderRadius="10"
    py={2.5}
    px={5}
    alignItems="center"
    color={isActive ? "secondary.500" : "secondary.300"}
    background={isActive ? "light.300" : "transparent"}
    _hover={{ background: "light.300", color: "secondary.500" }}
    w="full"
  >
    {icon}
    <Text color="inherit" ml={3}>
      {name}
    </Text>
  </Flex>
);
