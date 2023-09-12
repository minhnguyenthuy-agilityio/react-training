import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Flex, CloseButton, VStack } from "@chakra-ui/react";

import { Logo, SideBarItem } from "@/components";

import { ROUTES } from "@/constants";

import {
  Category2Icon,
  BookIcon,
  UserIcon,
  MessageIcon,
  SettingsIcon,
} from "@/assets/icons";

interface SideBarProps {
  onCloseDrawer: () => void;
}

type SidebarItem = {
  icon: ReactNode;
  name: keyof typeof ROUTES;
};

const SIDEBAR_LIST: SidebarItem[] = [
  { icon: <Category2Icon />, name: "OVERVIEW" },
  { icon: <BookIcon />, name: "TASK" },
  { icon: <UserIcon />, name: "MENTORS" },
  { icon: <MessageIcon />, name: "MESSAGE" },
  { icon: <SettingsIcon />, name: "SETTINGS" },
];

export const SideBar = ({ onCloseDrawer }: SideBarProps) => {
  const route = useLocation();

  return (
    <Box
      transition="2s ease"
      p={{ sm: 8, lg: 5, xl: 8 }}
      w={{ sm: "full", lg: "180px", xl: "252px" }}
    >
      <Flex mb="60px">
        <Logo />
        <CloseButton
          size="lg"
          color="secondary.300"
          display={{ sm: "flex", lg: "none" }}
          onClick={onCloseDrawer}
        />
      </Flex>
      {SIDEBAR_LIST.map(({ name, icon }) => (
        <VStack
          spacing={6}
          alignItems="start"
          key={name}
          as={Link}
          to={ROUTES[name]}
        >
          <SideBarItem
            icon={icon}
            name={name.toLowerCase()}
            isActive={route.pathname === ROUTES[name]}
          />
        </VStack>
      ))}
    </Box>
  );
};
