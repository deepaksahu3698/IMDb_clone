import React from 'react';
import {
  ChakraProvider,

  theme,
} from '@chakra-ui/react';
import Homepage from './Components/Homepage/homepage';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

import { video } from './trailor&FooterComponent/video'
import { Footer } from './trailor&FooterComponent/footer'

import { Search } from './searchBar/search';


function App() {
  return (
    <ChakraProvider theme={theme}>

     { video()}
    { Footer() }

      <Homepage/>

      <Search />

    </ChakraProvider>
  );
}

export default App;
