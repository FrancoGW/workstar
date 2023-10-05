// pages/_app.js
import { ChakraProvider, AppContainer } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AppContainer>
      <Component {...pageProps} />
      </AppContainer>
    </ChakraProvider>
  )
}

export default MyApp;