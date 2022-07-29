import React from "react";
  
import "./login.css"

import imdblogo from "./imdbcreatelogo.png"


import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react'

function Login() {
  const [input, setInput] = React.useState('')

  


  return (
      <div className="container_creareaccount_login">
    <div className="fromcontainer_login">
<img src={imdblogo} alt=""  />
<div className="input_container_login">
<div className="createheadder_login">
  <h1 style={{"fontSize":"30px"}}>Sign-In</h1>
</div>

<div className="inputbox_login">
<FormLabel style={{"fontWeight":"100",fontSize:"14px"}}>Email</FormLabel>
<Input placeholder='' style={{"height":"30px","border":"1px solid black","width":"139%","borderRadius":"3px","padding":"5px"}}/>

</div>
<div className="inputbox_login">
<FormLabel style={{fontWeight:"100",fontSize:"14px"}}>Password</FormLabel>
<Input  style={{"height":"30px","border":"0.5px solid black","width":"139%","borderRadius":"3px","padding":"5px"}} type="password"/>


</div>

<div className="login">
  <button>Sign-in</button>
</div>
<div className="alreadyhaveaccount_login">
 <input type="checkbox" name="" id="" /> <p>Already have an account? <span><a href=""> Details ►</a></span> </p>
</div>
<div className="other">
    
        <p>------------------------------- New to IMDb?------------------------------- </p>
    </div>
    <div className="login_create">
  <button>Create your IMDb account</button>
</div>
</div>
<div className="help_contaire_login">
  <div className="a_tag_login">
      <a href="">Help</a>
      <a href="">Conditions of Use</a>
      <a href="">Privacy Notice</a>
  </div>
  <div className="amazonname_login">
<p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
  </div>
</div>
    </div>
    </div>
  )
}

export default Login