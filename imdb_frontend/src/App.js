// import React from 'react';
// import {
//   ChakraProvider,

//   theme,
// } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';
// import Homepage from './Components/Homepage/homepage';
// import { Video } from './trailor&FooterComponent/video'
// import { Footer } from './trailor&FooterComponent/footer'
// import { Search } from './searchBar/search';
// import {Routes, Route} from "react-router-dom" 
// import SignUp from './Components/Signup/singup';
// import Createaccount from "./Components/Createaccount/createaccount"


// import Login from './components/Login/login';

// function App() {
//   return (
//     <ChakraProvider theme={theme}>

//      {/* { video()} */}
//       <Search />
//     <Routes>
//       <Route path='/'  element={<Homepage/>} > </Route>
//       <Route path='/trailer/:id' element={<Video/>} ></Route>
//       <Route path='/signup' element={<SignUp/>} ></Route>
//       <Route path='/createaccount' element={<Createaccount/>} ></Route>
//       <Route path='/login' element={<Login/>} ></Route>
//       {/* <Route path='/:id' element={<SingleMovie />} /> */}
//       </Routes>



//     { Footer() }
    
//     </ChakraProvider>
//   );
// }

// export default App;


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
<<<<<<< HEAD
import {Routes, Route} from "react-router-dom"
=======
import {Routes, Route} from "react-router-dom" 
>>>>>>> 6f7ecbd163fa665f535718f9725c9a1f74212dbb
import SignUp from './Components/Signup/singup';
import Createaccount from './Components/Createaccount/createaccount';
import Login from './Components/Login/login';
import {SingleMovie} from './searchBar/singleSearch';
function App() {
  return (
    <ChakraProvider theme={theme}>
     {/* { video()} */}
      {/* <Search /> */}
    <Routes>
      <Route path='/'  element={<Homepage/>} > </Route>
      <Route path='/trailer/:id' element={<Video/>} ></Route>
      <Route path='/signup' element={<SignUp/>} ></Route>
      <Route path='/createaccount' element={<Createaccount/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
<<<<<<< HEAD
      <Route path='/search/:id' element={<SingleMovie/>} ></Route>
=======

      <Route path='/search/:id' element={<SingleMovie/>} ></Route>

>>>>>>> 6f7ecbd163fa665f535718f9725c9a1f74212dbb
      </Routes>
    { Footer() }
    </ChakraProvider>
  );
}
export default App;
