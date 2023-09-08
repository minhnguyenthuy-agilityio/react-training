import { ReactNode } from "react";
import {
  Box,
  Flex,
  Drawer,
  DrawerContent,
  useDisclosure,
  Show,
} from "@chakra-ui/react";
import { Header, SideBar } from "@/components";

interface DefaultLayoutProps {
  pageName: string;
  children: ReactNode;
}

export const DefaultLayout = ({ pageName, children }: DefaultLayoutProps) => {
  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();

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
        <Header pageName={pageName} onOpenDrawer={onOpenDrawer} />

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
