import React from "react";

import {Route,Routes} from "react-router-dom"

import SignUp from "./Signup/singup";

import Createaccount from "./Createaccount/createaccount";

import Login from "./Login/login";

function Signup_login(){
    <>
    <SignUp/>
 <Routes>
 <Route path="/register" element={<Createaccount/>}></Route>

 </Routes>
 </>

}

export default Signup_login
// export default Signup_login