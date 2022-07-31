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
import { Routes, Route ,useNavigate} from "react-router-dom";
function Login() {
  const [email, setEmail] = React.useState('')
  const [password,setPassword]=React.useState("")

  const navigate =useNavigate()
function haldletocreate(){
    navigate("/createaccount")
}
async function logintohome(){
const payload={"postbody":{email,password}}
try {
    let res=await fetch(`http://localhost:8080/login`,{
        method:"post",
        body:JSON.stringify(payload)
        ,headers:{
            "Content-Type": "application/json"
        }
    })
    let user_data= await res.json()
    console.log(user_data)
    localStorage.setItem("token",JSON.stringify(user_data.data.token))

} catch (error) {
    console.log(error)
}
}

const gettoken= async()=>{

let token=localStorage.getItem("token")

try {
    

    let res=await fetch(`http://localhost:8080/loogedinuser`,{
        method:"post",
        body:JSON.stringify({"token":token}),
        headers:{
            "Content-Type": "application/json"
        }
    } )
    let token_res=await res.json()
} catch (error) {
    console.log(error)
}

}

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
<Input placeholder='' style={{"height":"30px","border":"1px solid black","width":"139%","borderRadius":"3px","padding":"5px"}} value={email}onChange= {(e)=>setEmail(e.target.value)}/>

</div>
<div className="inputbox_login">
<FormLabel style={{fontWeight:"100",fontSize:"14px"}}>Password</FormLabel>
<Input  style={{"height":"30px","border":"0.5px solid black","width":"139%","borderRadius":"3px","padding":"5px"}} type="password" value={password}onChange= {(e)=>setPassword(e.target.value)}/>


</div>

<div className="login">
  <button onClick={logintohome}>Sign-in</button>
</div>
<div className="alreadyhaveaccount_login">
 <input type="checkbox" name="" id="" /> <p>Already have an account? <span><a href=""> Details ►</a></span> </p>
</div>
<div className="other">
    
        <p>------------------------------- New to IMDb?------------------------------- </p>
    </div>
    <div className="login_create">
  <button onClick={haldletocreate}>Create your IMDb account</button>
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