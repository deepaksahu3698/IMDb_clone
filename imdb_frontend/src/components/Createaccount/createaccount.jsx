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
  import { Icon } from 'react-icons-kit'
  import {eyeOff} from 'react-icons-kit/feather/eyeOff'
  import {eye} from 'react-icons-kit/feather/eye'
  import { useToast } from '@chakra-ui/react'
  import { IconButton } from '@chakra-ui/icons'
  import { Routes, Route ,useNavigate,Link} from "react-router-dom";
import { useState } from "react";
  

  function Createaccount() {
    const navigate =useNavigate()
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [resetpassowrd, resetPassword] = React.useState('')
    const[submit,setSubmit]=useState(false)
    const toast = useToast()
    const[type,setType]=React.useState("password")
    const[icon,setIcon]=React.useState(eyeOff)

    function handle_check(){
        let flag=true
        if(name==""){
            flag=false
            return(<>
             function Check() {
                toast({
                    title: 'Plseae enter your name.',
        //   description: "To create your account you have.",
          status: 'error',
          duration: 3000,
          isClosable: true,
                })
             }
             Check()
        
            </>)
           
        }
        if(!email.includes("@") && !email.includes(".com") && email=="" ){
            flag=false
            return(<>
                function Check() {
                   toast({
                       title: 'Plseae enter correct email.',
           //   description: "To create your account you have.",
             status: 'error',
             duration: 3000,
             isClosable: true,
                   })
                }
                Check()
           
               </>)
        }

        if(!email.includes("@")){
            flag=false
            return(<>
                function Check() {
                   toast({
                       title: 'Plseae enter correct email.',
           //   description: "To create your account you have.",
             status: 'error',
             duration: 3000,
             isClosable: true,
                   })
                }
                Check()
           
               </>)
        }
        if(!email.includes(".com")  ){
            flag=false
            return(<>
                function Check() {
                   toast({
                       title: 'Plseae enter correct emailId.',
           //   description: "To create your account you have.",
             status: 'error',
             duration: 3000,
             isClosable: true,
                   })
                }
                Check()
           
               </>)
        }
        if(password.length<8){
            flag=false
            return(<>
                function Check() {
                   toast({
                       title: 'Password is too sort',
           //   description: "To create your account you have.",
             status: 'error',
             duration: 3000,
             isClosable: true,
                   })
                }
                Check()
           
               </>)
        }
 let val=!password.includes("@")
//  console.log(val)
//  console.log(password)
 if(val)
{
    flag=false
            return(<>
                function Check() {
                   toast({
                       title: ' Password must be containe "@" "$" "#" "&" "*" ',
           //   description: "To create your account you have.
             status: 'error',
             duration: 3000,
             isClosable: true,
                   })
                }
                Check()
           
               </>)
}

let num=!password.includes("5")
if(num){
    flag=false
    return(<>
        function Check() {
           toast({
               title: ' Password must be containe a number',
   //   description: "To create your account you have.
     status: 'error',
     duration: 3000,
     isClosable: true,
           })
        }
        Check()
   
       </>)


}
if(resetpassowrd!==password){
    flag=false
    return(<>
        function Check() {
           toast({
               title: ' Password does not match',
   //   description: "To create your account you have.
     status: 'error',
     duration: 3000,
     isClosable: true,
           })
        }
        Check()
   
       </>)
}
if(flag){
    
    handle_create(name,email,password)
    
}

    }

  
    const handle_create= async(name,email,password)=>{
      setSubmit(true)
        const payload={"postbody":{name,email,password,subscribed:[]}}
        console.log(payload)
       
       if(password==resetpassowrd){
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
    // alert("Password dosenot match")
}

handletogocreate()

    }
    const handletogocreate=()=>{
        navigate("/login")
          }

  
  const handle_password=()=>{
    if(type==="password"){
        setIcon(eye)
        setType("text")
    }
    else{
        setIcon(eyeOff)
        setType("password")

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
<div className="passwordicon">
<Input placeholder='at least 8 characters' style={{"height":"30px","border":"0.5px solid black","width":"132%","borderRadius":"3px","padding":"5px"}} type={type} value={password}onChange= {(e)=>setPassword(e.target.value)}/>
  <Icon icon={icon}  onClick={handle_password}/> 
</div>

  <img src={passwordcheck} alt="" style={{"marginTop":"10px"}} />

</div>
<div className="inputbox">
<FormLabel style={{"fontWeight":"100",fontSize:"14px"}}>Re-enter password</FormLabel>
  <Input placeholder='' style={{"height":"30px","border":"1px solid black","width":"139%","borderRadius":"3px","padding":"5px"}} type="password" value={resetpassowrd} onChange= {(e)=>resetPassword(e.target.value)}/>

</div>
<div className="createbutton">
    <button onClick={handle_check}>Create your IMDb account</button>
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