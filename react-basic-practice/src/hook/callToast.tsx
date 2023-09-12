import { ReactNode } from "react";
import { useToast } from "@chakra-ui/react";

export const useCustomToast = () => {
  const toast = useToast();

  const callToast = (message: ReactNode, status: "success" | "error") => {
    toast({
      title: message,
      status: status,
      duration: 3000,
      isClosable: true,
    });
  };

  return callToast;
};
