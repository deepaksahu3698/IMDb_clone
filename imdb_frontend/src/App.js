import React from 'react';
import {
  ChakraProvider,

  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Homepage from "./components/Homepage/homepage"
import { Video } from './trailor&FooterComponent/video'
import { Footer } from './trailor&FooterComponent/footer'
import { Search } from './searchBar/search';
import {Routes, Route} from "react-router-dom" 
import SignUp from './components/Signup/singup';
import Createaccount from './components/Createaccount/createaccount';
import Login from './components/Login/login';

function App() {
  return (
    <ChakraProvider theme={theme}>

     {/* { video()} */}
      <Search />
    <Routes>
      <Route path='/'  element={<Homepage/>} > </Route>
      <Route path='/trailer/:id' element={<Video/>} ></Route>
      <Route path='/signup' element={<SignUp/>} ></Route>
      <Route path='/createaccount' element={<Createaccount/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
      </Routes>



    { Footer() }
    </ChakraProvider>
  );
}

export default App;
