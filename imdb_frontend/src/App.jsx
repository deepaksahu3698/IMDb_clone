import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
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
import { Search } from './searchBar/search';
import { SingleMovie } from './searchBar/singleSeaech';

function App() {
  return (<>
       <Search/>
        <SingleMovie />
        {/* <Routes>
          <Route path='/:_id' element={<SingleMovie />} />
        </Routes> */}
        </>
     
 
  );
}

export default App;
