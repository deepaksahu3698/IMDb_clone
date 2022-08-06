import React, { useEffect ,useState} from "react";
// import { AuthContext } from "../../Context/AuthContext";
import styled from 'styled-components';
import Carousel from 'react-multi-carousel'

const Titles = styled.h6`
  color : white;
 position : relative;
 top : 5px;
 padding : 0;
 margin : 0;
 &:hover{
   text-decoration :underline;
   cursor: pointer;
 }
`;

// const FeaturesToday = ({threeSliderApiKey}) =>{
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 5,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };


  
//   const API_KEY = 'cd1b752287267fcdd91d7693d2fb5336';

//   const [data,setData] = useState([]);
// //   const {base_url,handleSearch} = useContext(AuthContext)

//   useEffect(()=>{
//     fetch(threeSliderApiKey)
//     .then((res)=>res.json())
//     .then((res)=>setData(res.results))
//   },[])




//   return (
//     <div style={{ color: "white", background:"black",width:"100%",margin:"auto", }}>
    
//   <Carousel  responsive={responsive}>
    
    // {
    //   data.map((item)=>{
    //     return (
    //       <div style={{height : "300px", margin:"auto", width : "87%" }} > 
    //           <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" height={"90%"}  /> 
    //           <Titles >{!item.title  ? item.name : item.title}</Titles>
    //       </div>
    //     )
    //   })
    // }

//     {/* <div style={{height : "300px", margin:"auto", width : "95%" }} > 
//     <img src="https://m.media-amazon.com/images/M/MV5BNGZhMjBiMDMtYTIyMS00OTRlLThhZWItYThjNTRkZWEyNjIzXkEyXkFqcGdeQWpnYW1i._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg" alt="" height={"88%"} width={"100%"} /> 
//     <h6 style={{ color : "white", position : "relative", top : "5px", padding : "0", margin : "0"}} >New Movie of 2022</h6>
//     </div>
//     <div style={{height : "300px", margin:"auto", width : "95%"}} >
//     <img src="https://m.media-amazon.com/images/M/MV5BZDMxMDc3ZmItMWRjMi00YWU4LTg3ZGQtNGE1MDc2YzliZWU0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX760_CR0,0,760,428_.jpg" alt="" height={"88%"} width={"100%"} /> 
//     <h6 style={{ color : "white", position : "relative", top : "5px", padding : "0", margin : "0"}} >New Movie of 2022</h6>
//     </div>
//     <div style={{height : "300px", margin:"auto", width : "95%"}} >
//     <img src="https://m.media-amazon.com/images/M/MV5BYzJjYzY5MDUtMDNmNi00NjY2LTljNzEtNTM5ZWNjNTUzMmNiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX760_CR0,0,760,428_.jpg" alt="" height={"88%"} width={"100%"} /> 
//     <h6 style={{ color : "white", position : "relative", top : "5px", padding : "0", margin : "0"}} >New Movie of 2022</h6>
//     </div>
//     <div style={{height :"300px", margin:"auto", width : "95%" }} >
//     <img src="https://m.media-amazon.com/images/M/MV5BNGZhMjBiMDMtYTIyMS00OTRlLThhZWItYThjNTRkZWEyNjIzXkEyXkFqcGdeQWpnYW1i._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg" alt="" height={"88%"} width={"100%"} /> 
//     <h6 style={{ color : "white", position : "relative", top : "5px", padding : "0", margin : "0"}} >New Movie of 2022</h6>
//     </div>
//     <div style={{height :"300px", margin:"auto",width : "95%" }} >
//     <img src="https://m.media-amazon.com/images/M/MV5BNGZhMjBiMDMtYTIyMS00OTRlLThhZWItYThjNTRkZWEyNjIzXkEyXkFqcGdeQWpnYW1i._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg" alt="" height={"88%"} width={"100%"} /> 
//     <h6 style={{ color : "white", position : "relative", top : "5px", padding : "0", margin : "0",justifyContent : "center"}} >New Movie of 2022</h6>
//     </div> */}
   
//   </Carousel>
//     </div>
//   );
// }

const FeaturesToday = ( {threeSliderApiKey}) =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
      const [dat,setData] = useState([]);
      //   const {base_url,handleSearch} = useContext(AuthContext)
      
        useEffect(()=>{
          fetch(threeSliderApiKey)
          .then((res)=>res.json())
          .then((res)=>setData(res.results))
        },[])
    return <div style={{ color: "white", background:"black",width:"100%",margin:"auto", }}>
        <Carousel></Carousel>
   {
      dat && dat.map((item)=>{
        return (
          <div style={{height : "300px", margin:"auto", width : "87%" }} > 
              <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" height={"90%"}  /> 
              <Titles >{!item.title  ? item.name : item.title}</Titles>
          </div>
        )
      })
    }
    </div>
}
export default FeaturesToday;