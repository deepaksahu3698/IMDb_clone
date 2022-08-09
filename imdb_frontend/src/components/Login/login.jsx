import React, { useEffect } from 'react';

import './login.css';

import imdblogo from './imdbcreatelogo.png';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import { useToast } from '@chakra-ui/react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { users } from '../../Redux/state';
function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {user} = useSelector((store)=>store)
  console.log(user)

  const toast = useToast()
  const[type,setType]=React.useState("password")
  const[icon,setIcon]=React.useState(eyeOff)

  const navigate = useNavigate();
  const dispatch = useDispatch()
  function haldletocreate() {
    navigate('/createaccount');
  }
  async function logintohome(email,password) {
    const payload = { postbody: { email, password } };
    try {
      let res = await fetch(`http://localhost:8080/login`, {
        method: 'post',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      let user_data = await res.json();
      console.log(user_data);
      localStorage.setItem('token', JSON.stringify(user_data.data.token));
    //   if(user_data.data.token){
        getLoggedIn()
    //   }
    } catch (error) {
      alert('Incorrect Email or Password')
    
    return(<>
        function Check() {
           toast({
               title: 'password does not match.',
   //   description: "To create your account you have.",
     status: 'error',
     duration: 3000,
     isClosable: true,
           })
        }
        Check()
   
       </>)


    }
  }
  React.useEffect(()=>{
    getLoggedIn()
  },[])
  
  function getLoggedIn(){
    let token = JSON.parse(localStorage.getItem("token"));
   console.log(token)
    let url = `http://localhost:8080/loogedinuser`;
    fetch(url,{
      method:"POST",
      body: JSON.stringify({
        token:token
      }),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(res=>res.json())
    .then((res)=>{
      console.log(res)
      dispatch(users(res))
      navigate('/')
      
    })
    .catch((error)=>console.log(error))
  }

  const gettoken = async () => {
    let token = (localStorage.getItem('token'));

    try {
      let res = await fetch(`http://localhost:8080/loogedinuser`, {
        method: 'post',
        body: JSON.stringify({ token: token }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      let token_res = await res.json();
    } catch (error) {
      console.log(error);
    }
  };
   const handleLogin = ( ) =>{
let flag=true
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

    logintohome(email,password)
    // navigate('/')
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
    <div className="Allcontainer">
    <div className="container_creareaccount_login">
      <div className="fromcontainer_login">
        <img src={imdblogo} alt="" />
        <div className="input_container_login">
          <div className="createheadder_login">
            <h1 style={{ fontSize: '30px' }}>Sign-In</h1>
          </div>

          <div className="inputbox_login">
            <FormLabel style={{ fontWeight: '100', fontSize: '14px' }}>
              Email
            </FormLabel>
            <Input
              placeholder=""
              style={{
                height: '30px',
                border: '1px solid black',
                width: '139%',
                borderRadius: '3px',
                padding: '5px',
              }}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="inputbox_login">
            <FormLabel style={{ fontWeight: '100', fontSize: '14px' }}>
              Password
            </FormLabel>
            <div className="showpassword">

            
            <Input
              style={{
                height: '30px',
                border: '0.5px solid black',
                width: '139%',
                borderRadius: '3px',
                padding: '5px',
              }}
              type={type}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
              <Icon icon={icon}  onClick={handle_password}/> 
              </div>
          </div>

          <div className="login">
            <button onClick={handleLogin}>Sign-in</button>
          </div>
          <div className="alreadyhaveaccount_login">
            <input type="checkbox" name="" id="" />{' '}
            <p>
              Already have an account?{' '}
              <span>
                <a href=""> Details ►</a>
              </span>{' '}
            </p>
          </div>
          <div className="other">
            <p>
              ------------------------------- New to
              IMDb?-------------------------------{' '}
            </p>
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
    </div>
  );
}

export default Login;
