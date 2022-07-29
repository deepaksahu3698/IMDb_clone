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
import Signup_login from './components/SIgn_login';
import Createaccount from './components/Createaccount/createaccount';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
   
    {/* {
Signup_login()
    } */}
    <Createaccount/>
    </Box>
    </ChakraProvider>
  );
}

export default App;
