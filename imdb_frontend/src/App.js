import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Search } from './searchBar/search';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Search />
    </ChakraProvider>
  );
}

export default App;
