import { ChakraProvider } from "@chakra-ui/react";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
