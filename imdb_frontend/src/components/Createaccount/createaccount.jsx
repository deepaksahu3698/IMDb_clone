  import React from "react";
  
  import "./createaccount.css"

  import imdblogo from "./imdbcreatelogo.png"
  import passwordcheck from "./passwordcheck.png"

  import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
  } from '@chakra-ui/react'

  function Createaccount() {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [setpassword, setPassword] = React.useState('')
    const [resetpassowrd, resetPassword] = React.useState('')
  
    const handle_create= async()=>{

        const payload={name,email,setpassword,resetpassowrd,subscribed:[]}
        console.log(payload)
if(setpassword==resetpassowrd){
    try {
        let res=await fetch(`http://localhost:8080/posts`,{
            method:"post",
            body:JSON.stringify(payload)
            ,headers:{
                "Content-Type": "application/json"
            }
        })
        let user_data= await res.json()
    } catch (error) {
        console.log(error)
    }
}
else{
    alert("Password dosenot match")
}

    }
  
  
    return (
        <div className="container_creareaccount">
      <div className="fromcontainer">
<img src={imdblogo} alt=""  />
<div className="input_container">
<div className="createheadder">
    <h1 style={{"fontSize":"30px"}}>Create account</h1>
</div>
<div className="inputbox">
<FormLabel style={{"fontWeight":"100",fontSize:"14px"}}>Your name</FormLabel>
  <Input placeholder='' style={{"height":"30px","border":"1px solid black","width":"139%","borderRadius":"3px","padding":"5px"}} value={name}onChange= {(e)=>setName(e.target.value)} />

</div>
<div className="inputbox">
<FormLabel style={{"fontWeight":"100",fontSize:"14px"}}>Email</FormLabel>
  <Input placeholder='' style={{"height":"30px","border":"1px solid black","width":"139%","borderRadius":"3px","padding":"5px"}} value={email}onChange= {(e)=>setEmail(e.target.value)} />

</div>
<div className="inputbox">
<FormLabel style={{fontWeight:"100",fontSize:"14px"}}>Password</FormLabel>
  <Input placeholder='at least 8 characters' style={{"height":"30px","border":"0.5px solid black","width":"132%","borderRadius":"3px","padding":"5px"}} type="password" value={setpassword}onChange= {(e)=>setPassword(e.target.value)}/>
  <img src={passwordcheck} alt="" style={{"marginTop":"10px"}} />

</div>
<div className="inputbox">
<FormLabel style={{"fontWeight":"100",fontSize:"14px"}}>Re-enter password</FormLabel>
  <Input placeholder='' style={{"height":"30px","border":"1px solid black","width":"139%","borderRadius":"3px","padding":"5px"}} type="password" value={resetpassowrd} onChange= {(e)=>resetPassword(e.target.value)}/>

</div>
<div className="createbutton">
    <button onClick={handle_create}>Create your IMDb account</button>
</div>
<div className="alreadyhaveaccount">
    <p>Already have an account? <span><a href=""> Sign-in ►</a></span> </p>
</div>
</div>
<div className="help_contaire">
    <div className="a_tag">
        <a href="">Help</a>
        <a href="">Conditions of Use</a>
        <a href="">Privacy Notice</a>
    </div>
    <div className="amazonname">
<p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
    </div>
</div>
      </div>
      </div>
    )
  }

export default Createaccount