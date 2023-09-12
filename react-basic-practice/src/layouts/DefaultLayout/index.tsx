import { ReactNode } from "react";
import {
  Box,
  Flex,
  Drawer,
  DrawerContent,
  useDisclosure,
  Show,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

import { Header, SideBar } from "@/components";

import { getPageNameFromRoute } from "@/helpers";

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();

  const route = useLocation();

  return (
    <Flex h="100vh" w="100vw">
      <Show above="lg">
        <SideBar onCloseDrawer={onCloseDrawer} />
      </Show>

      <Drawer
        isOpen={isOpenDrawer}
        placement="left"
        onClose={onCloseDrawer}
        returnFocusOnClose={false}
        onOverlayClick={onCloseDrawer}
        size="full"
      >
        <DrawerContent>
          <SideBar onCloseDrawer={onCloseDrawer} />
        </DrawerContent>
      </Drawer>

      <Flex flex="1" direction="column" h="full">
        <Header
          pageName={getPageNameFromRoute(route.pathname)}
          onOpenDrawer={onOpenDrawer}
        />

        <Box
          flex="1"
          bgColor="gray"
          h="full"
          backgroundColor="light.300"
          overflowY="auto"
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};
