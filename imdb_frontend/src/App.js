import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Homepage from './Components/Homepage/homepage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Homepage/>
    </ChakraProvider>
  );
}

export default App;
