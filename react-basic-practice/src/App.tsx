import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { CHAKRA_THEME } from "@/themes";

import Routing from "./Routing";

import "@/assets/styles/index.css";

const App = () => {
  return (
    <ChakraProvider theme={CHAKRA_THEME}>
      <Router>
        <Routing />
      </Router>
    </ChakraProvider>
  );
};

export default App;
