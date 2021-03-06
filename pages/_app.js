import "../styles/globals.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  const config = {
    initialColorMode: "light",
    useSystemColorMode: true,
  };
  const theme = extendTheme({ config });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
