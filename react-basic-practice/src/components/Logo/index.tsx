import { Flex, Image, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { ROUTES } from "@/constants";

import logo from "@/assets/images/logo.png";

export const Logo = () => {
  return (
    <Flex
      as={Link}
      to={ROUTES.TASK}
      w="188px"
      h={10}
      alignItems="center"
      mb="50px"
      cursor="pointer"
    >
      <Image src={logo} mr={3} />
      <Heading size="xl">Nuegas</Heading>
    </Flex>
  );
};
