import React from "react";
 import "./signup.css"
import imdb from "./ImdbLogo.png"
import google from "./googlelogo.png"
import apple from "./apple.png"
import amazon from "./amazonlogo.png"
 const SignUp=()=>{

return(
<div>
<div className="container">
<div className="Middle_container">
<div className="sigup_container">
    <div className="signup_button">
<div>
    <h1 style={{"fontWeight":"bold","fontSize":"25px"}}>Sign in</h1>
</div>
<div className="sigbup_button_div">
    <div className="button_containet">
        <img src={imdb} alt="" />
        <p>Sign in with IMDb</p>
    </div>
    <div className="button_containet">
    <img src={amazon} alt="" />
        <p>Sign in with Amazon</p>
    </div>
    <div className="button_containet">
    <img src={google} alt="" />
        <p>Sign in with Google</p>
    </div>
    <div className="button_containet">
    <img src={apple} alt="" />
        <p>Sign in with Apple</p>
    </div>
    <div className="button_options">
    
    <a href="">Show more options ⮟</a>
    </div>
</div>

<div className="other_login">


<div className="other">
    
        <p>---------------- or -----------------</p>
    </div>
    <div className="button_containet create_account">
   
        <p>Create a New Account</p>
    </div>
    <div className="some_message">
        <p>By signing in, you agree to IMDb's <span> Conditions of Use </span> and <span> Privacy Policy</span></p>
    </div>
</div>



    </div>
    <div className="bar"></div>
<div className="Benefits ">
<div>
    <h1 style={{"fontWeight":"bold","fontSize":"20px"}}>Benefits of your free IMDb account</h1>
</div>
<div className="details_benefits_conatiner">
    <div className="details_benefits">
        <b>Personalized Recommendations</b>
        <p>Discover shows you'll love</p>
    </div>
    <div className="details_benefits">
        <b>Your Watchlist</b>
        <p>Track everything you want to watch and receive e-mail when movies open in theaters.</p>
    </div>
    <div className="details_benefits">
        <b>Your Ratings</b>
        <p>Rate and remember everything you've seen.</p>
    </div>
    <div className="details_benefits">
        <b>Contribute to IMDb</b>
        <p>Add data that will be seen by millions of people and get cool badges</p>
    </div>
</div>

</div>
</div>
</div>
<div className="recebtview">
<div className="recenthistory">
    <div className="Recently_Viewed">
        <h1>Recently Viewed</h1>
    </div>
    <div className="viewed_p">
        <p>Clear your history</p>
    </div>
</div>
</div>

</div>

</div>)

 }
 export default SignUp

