import { MouseEventHandler } from "react";
import { FiBell } from "react-icons/fi";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Avatar, Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";

import avatar from "@/assets/images/avatar.jpg";

interface HeaderProps {
  pageName: string;
  onOpenDrawer: MouseEventHandler<HTMLButtonElement>;
}

export const Header = ({ pageName, onOpenDrawer }: HeaderProps) => (
  <Flex
    bg="light.100"
    px={{ sm: 6, md: 8 }}
    pt={{ sm: 8 }}
    pb={{ sm: 4, md: 3 }}
    justifyContent="space-between"
    align={{ lg: "center" }}
  >
    <Box>
      <Show below="lg">
        <IconButton
          icon={<HamburgerIcon />}
          fontSize="md"
          lineHeight="md"
          w="44px"
          h="44px"
          variant="outline"
          isRound={true}
          color="secondary.300"
          aria-label="open menu"
          onClick={onOpenDrawer}
          mb={8}
        />
      </Show>

      <Heading as="h1" size="md">
        {pageName}
      </Heading>
    </Box>

    <Flex>
      <IconButton
        variant="outline"
        isRound={true}
        color="secondary.300"
        fontSize={{ sm: "md", lg: "lg" }}
        lineHeight={{ sm: "md", lg: "lg" }}
        w={{ sm: "44px", lg: "52px" }}
        h={{ sm: "44px", lg: "52px" }}
        aria-label="open menu"
        icon={<FiBell />}
      />
      <Avatar name="avatar" src={avatar} ml="24px" />
    </Flex>
  </Flex>
);
