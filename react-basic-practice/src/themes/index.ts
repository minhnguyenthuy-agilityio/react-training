import { extendTheme } from "@chakra-ui/react";
import { foundations } from "./foundations";
import { components } from "./component/index";

const overrides = {
  ...foundations,
  components,
};

export const CHAKRA_THEME = extendTheme(overrides);
