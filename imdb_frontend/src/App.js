import React from 'react';
import {
  ChakraProvider,

  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Homepage from "./Components/Homepage/homepage"
import { Video } from './trailor&FooterComponent/video'
import { Footer } from './trailor&FooterComponent/footer'
import { Search } from './searchBar/search';
import {Routes, Route} from "react-router-dom" 

function App() {
  return (
    <ChakraProvider theme={theme}>

     {/* { video()} */}
      <Search />
    <Routes>
      <Route path='/homepage'  element={<Homepage/>} > </Route>
      <Route path='/trailer/:id' element={<Video/>} ></Route>
      </Routes>



    { Footer() }
    </ChakraProvider>
  );
}

export default App;
