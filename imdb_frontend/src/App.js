import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Homepage from './Components/Homepage/homepage';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Search } from './searchBar/search';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Homepage/>
      <Search />
    </ChakraProvider>
  );
}

export default App;
