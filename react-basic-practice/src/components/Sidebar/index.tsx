import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, CloseButton } from "@chakra-ui/react";
import { TbCategory2 } from "react-icons/tb";
import { BsBook } from "react-icons/bs";
import { PiHexagon } from "react-icons/pi";
import { TbMessageDots } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

import { Logo, SideBarItem } from "@/components";

import { ROUTES } from "@/constants";

interface SideBarProps {
  onCloseDrawer: () => void;
}

type SidebarItem = {
  icon: ReactNode;
  name: keyof typeof ROUTES;
};

const SIDEBAR_LIST: SidebarItem[] = [
  { icon: <TbCategory2 />, name: "OVERVIEW" },
  { icon: <BsBook />, name: "TASK" },
  { icon: <PiHexagon />, name: "MENTORS" },
  { icon: <TbMessageDots />, name: "MESSAGE" },
  { icon: <IoSettingsOutline />, name: "SETTINGS" },
];

export const SideBar = ({ onCloseDrawer }: SideBarProps) => {
  return (
    <Box
      transition="2s ease"
      p={{ sm: 8, lg: 5, xl: 8 }}
      w={{ sm: "full", lg: "180px", xl: "252px" }}
    >
      <Flex>
        <Logo />
        <CloseButton
          size="lg"
          color="secondary.300"
          display={{ sm: "flex", lg: "none" }}
          onClick={onCloseDrawer}
        />
      </Flex>
      {SIDEBAR_LIST.map(({ name, icon }) => (
        <Box key={name} as={Link} to={ROUTES[name]}>
          <SideBarItem icon={icon} name={name.toLowerCase()} />
        </Box>
      ))}
    </Box>
  );
};
