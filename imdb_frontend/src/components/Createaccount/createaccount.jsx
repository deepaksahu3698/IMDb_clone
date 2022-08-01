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
  import { Routes, Route ,useNavigate,Link} from "react-router-dom";
import { useState } from "react";
  

  function Createaccount() {
    const navigate =useNavigate()
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [resetpassowrd, resetPassword] = React.useState('')
    const[submit,setSubmit]=useState(false)
  
    const handle_create= async()=>{
      setSubmit(true)
        const payload={"postbody":{name,email,password,subscribed:[]}}
        console.log(payload)
        if(!email.includes("@gmail.com")){
          return alert('Please Fill Correct Email id')
        }else if(password.length < 8){
          return alert("Password must be atleast 8 caracters")
        }else if(password != resetpassowrd){
          return alert("Password did not match")
        }
       else if(password==resetpassowrd){
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

handletogocreate()

    }
    const handletogocreate=()=>{
        navigate("/login")
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
  <Input placeholder='at least 8 characters' style={{"height":"30px","border":"0.5px solid black","width":"132%","borderRadius":"3px","padding":"5px"}} type="password" value={password}onChange= {(e)=>setPassword(e.target.value)}/>
  <img src={passwordcheck} alt="" style={{"marginTop":"10px"}} />

</div>
<div className="inputbox">
<FormLabel style={{"fontWeight":"100",fontSize:"14px"}}>Re-enter password</FormLabel>
  <Input placeholder='' style={{"height":"30px","border":"1px solid black","width":"139%","borderRadius":"3px","padding":"5px"}} type="password" value={resetpassowrd} onChange= {(e)=>resetPassword(e.target.value)}/>

</div>
<div className="createbutton">
    <button onClick={handle_create}>Create your IMDb account</button>
</div>
{/* submitsetSubmit */}
<div className="alreadyhaveaccount">
    <p>Already have an account? <span onClick={()=>navigate("/login")} > Sign-in ►</span> </p>
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