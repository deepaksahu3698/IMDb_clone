import React, { Component, useEffect, useState } from "react";
import './born.css'

function BornToday (){
 

    const [data,setData] = useState([]);

    const API_KEY = 'cd1b752287267fcdd91d7693d2fb5336';
    useEffect(()=>{
        fetch(`https://reqres.in/api/users?page=2`)
        .then((res)=>res.json())
        .then((res)=>setData(res.data))
    },[])


    return (
      <div>
           {
           
          // console.log(data)// poster_path ,,vote_average
            // data.map((item)=>{
            //   return (
            //     // <MovieSliderCard key={item.id} name={item.name} poster ={item.poster_path} rate = {item.vote_average} /> 
            //     <div className="bornTodayBox">
            //          <img alt="Remy Sharp" src={item.avatar}  />
               
            //   </div>
            //   )
              
            // })
           }
            <div className="bornTodayBox">
                <img src="https://reqres.in/img/faces/7-image.jpg" alt="" />
                <img src="https://reqres.in/img/faces/8-image.jpg" alt="" />
                <img src="https://reqres.in/img/faces/9-image.jpg" alt="" />
                <img src="https://reqres.in/img/faces/10-image.jpg" alt="" />
                <img src="https://reqres.in/img/faces/11-image.jpg" alt="" />
            </div>
      </div>
    );
  
}

export default BornToday;