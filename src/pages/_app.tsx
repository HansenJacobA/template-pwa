import type { AppProps } from "next/app";
import Script from "next/script";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {/* <Script src="/sw-register.js" /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
