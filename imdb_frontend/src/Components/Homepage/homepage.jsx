import { Box, Button, Center, HStack, Stack, Text,Image
 } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { topPicks,users } from "../../Redux/state";
import {Video}  from "../../trailor&FooterComponent/video"
import css from "./homepage.css"


const Homepage =() => {

    const user = useSelector((store)=>store.user)

   
    
    function getLoggedIn(){
        let token = JSON.parse(localStorage.getItem("token"));
       console.log(token)
       if(token != 'not any user'){
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
        })
        .catch((error)=>console.log(error))
       }
      }   

useEffect(()=>{
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
    })
    .catch((error)=>console.log(error))
  }
    const slider =["https://m.media-amazon.com/images/M/MV5BMzM1NGJiZDEtMWY0MC00MzVkLWJiNzItODY0OTgzZjJmOGI5XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._CR91,328,2113,1189_QL75_UX1000_CR0,0,1000,563_.jpg", "https://m.media-amazon.com/images/M/MV5BYTZhOTEzYjgtNzljMy00M2IyLThkZmMtNjdiN2Y5MDEwMWE5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg" , "https://m.media-amazon.com/images/M/MV5BNmY1NjQ5YjUtNGNkMy00NmVlLWE1ZjEtMzU3ZTk5N2ZmMTcxXkEyXkFqcGdeQWFybm8@._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg" , "https://m.media-amazon.com/images/M/MV5BMWJlNDMwNTItMThkYS00YjFkLWIxOWItN2JiZTI2ZjRjYzNlXkEyXkFqcGdeQWplZmZscA@@._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg"]
    const [slidingData, setSlidingData] = useState([]); 
    const [currentSlide , setCurrentSlide] = useState("")
    const dispatch = useDispatch()
    const {topPick} = useSelector((state) => state)
    const getTopPicks = async () => {
         fetch(`http://localhost:8080/toppics`)
        .then((res)=>res.json())
        .then((res)=>{
            setSlidingData(res.data)
            dispatch(topPicks(res.data))
        })
        // .then((res) => )
    }
    const navigate = useNavigate()
    useEffect(()=>{
        getTopPicks();
        getLoggedIn()
    },[])


    useEffect(()=>{
        
        let id = setInterval(changePic, 3000);
        let slide =0 ;
        // if(id) clearInterval(id)
        function changePic(){
            slide++;
            if(slide==slider.length){
                slide =0 ;
                
            } 
            setCurrentSlide(slider[slide])
    
        }

    },[])

    function addToWatchList(pics){
        fetch(`http://localhost:8080/subscribe`,{
            method:"POST",
            body: JSON.stringify({
                postbody:{
                    ...user,
                    Item:{
                        ...pics
                    }
                }
            }),
            headers:{
                "Content-Type" : "application/json"
            }
        })
        .then((res)=>res.json())
        .then((res)=>dispatch(users(res)))
    }
    // console.log("id",user.id)
    function removeFromWatchList(pics)
    {
        console.log(user._id)
        fetch(`http://localhost:8080/removetowatchlist`,{
            method:"POST",
            body : JSON.stringify({
                "id": user._id,
                "item": pics
            }),
        headers:{
            "Content-Type" : "application/json"
        }
    })
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        dispatch(users(res))
    })
    }

    // const {user} = useSelector(state=>state)

    let idx = Math.floor(Math. random () * (11 - 1) + 1)
    return(
        <div>
             <Search />
             <Box background={'black'}>
                <Image ml={60} w={'70%'} src={amazonPrime} padding='10px' />
            </Box>
        <HStack alignItems="flex-start" marginTop="5vh" margin="5vh 7%">
            <div>
              <img className="courouselImg"  src={currentSlide} alt="" />
            </div>
            <div>
                <span  color="#F5C518" style={{color:"#F5C518", fontFamily:" Roboto,Helvetica,Arial,sans-serif;" ,fontSize:"20px"}} >Up next</span>
                <div>
                    <HStack bgColor={"#111010"} p="15px" >
                        <div>
                            <img  className="upNextImg" src="https://m.media-amazon.com/images/M/MV5BZTI1MWQwY2MtYjViMi00MWUyLTlhMjQtN2M4Y2E5Nzc2MTcwXkEyXkFqcGdeQXVyMTMzNTE1MDky._V1_QL75_UX280_CR0,0,280,414_.jpg" alt="" />
                        </div>
                        <div  >
                            <img className="pauseButton" src="https://www.freeiconspng.com/thumbs/pause-button-png/pause-button-png-31.png" alt="" />
                            <Text fontSize='16px' color="white" >Ana da Armas Transforms Into Marilyn Monroe</Text>
                            <Text fontSize='14px' color="#FFFFFFB3" >Watch the New 'Blonde' Trailer</Text>
                        </div>
                    </HStack>
                    <div>
                   <HStack  p="15px" >
                        <div>
                            <img  className="upNextImg" src="https://m.media-amazon.com/images/M/MV5BN2JjNjIwNDgtNTgxNy00OTViLTk0YWUtMTI0OWYwZWNmMDJmXkEyXkFqcGdeQXVyNDYzNjU3ODM@._V1_QL75_UX280_CR0,0,280,414_.jpg" alt="" />
                        </div>
                        <div style={{marginLeft:"20px"}}>
                            <img className="pauseButton" src="https://www.freeiconspng.com/thumbs/pause-button-png/pause-button-png-31.png" alt="" />
                            <Text fontSize='16px' color="white" >'Ant-Man Quantumania' Stars Share Paul Rudd Secrets</Text>
                            <Text fontSize='14px' color="#FFFFFFB3" >Surprising Facts About the Superhero</Text>
                        </div>
                    </HStack>
                    </div>
                    <div>
                   <HStack  p="15px" >
                        <div>
                            <img  className="upNextImg" src="https://m.media-amazon.com/images/M/MV5BNjMxZmI4NzEtYWNjOS00M2MwLWE4YTctMjk1YWEzOTY1NjkwXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX280_CR0,0,280,414_.jpg" alt="" />
                        </div>
                        <div>
                            <img className="pauseButton" src="https://www.freeiconspng.com/thumbs/pause-button-png/pause-button-png-31.png" alt="" />
                            <Text fontSize='16px' color="white" >'Black Panther: Wakanda Forever'</Text>
                            <Text fontSize='14px' color="#FFFFFFB3" >Watch the Comic-Con Trailer</Text>
                        </div>
                    </HStack>
                    </div>
                    {/* <img src={slidingData[2].image} alt="" />
                    <img src={slidingData[3].image} alt="" /> */}
                </div> 
            </div>
        </HStack>
                <Text fontSize="32px" color="#F5C518" m="40px 7% 25px 7% " >What To Watch</Text>
                <Text fontSize="24px" color="white" m="20px 7% 20px 7% " >Top Picks ❯</Text>
            <Stack direction={['column', 'row']} spacing='24px' margin="5vh 7%"  >
            {
                slidingData ? 
                slidingData.slice(0,6).map((pics)=>(
                    <Box key={pics.id} width={200}  bgColor="#1a1a1a" >
                        <img  height="50px" src={pics.image} alt="" />
                        <Box p={3} >
                            <Text className="topPicTitle" > ⭐ 8.7  </Text>
                            <Text className="topPicTitle" >{pics.title}</Text>
                            <Button className="topPicButton" onClick={()=>addToWatchList(pics)}   >+ Watchlist</Button>
                            <Button className="topPicPauseButton" onClick={ () =>   navigate(`/trailer/${pics.id}`)    } >Trailer</Button>
                        </Box>
                    </Box>
                ))  
                :
                <div></div>
            }
            {/* <Button>left </Button> */}
            </Stack>

            {/* Watchlist */}
                <Text fontSize="24px" color="white" m="20px 7% 20px 7% " >Watchlist ❯</Text>
            <Stack direction={['column', 'row']} spacing='24px' margin="0% 7%"  >
            {
               user.subscribed && user.subscribed.length != 0? 
               (user.subscribed.slice(0,6).map((pics,index)=>(
                    <Box key={index} width={200}   bgColor="#1a1a1a" >
                        <img  height="50px" src={pics.image} alt="" />
                        <Box p={3} >
                            <Text className="topPicTitle" > ⭐ 8.7  </Text>
                            <Text className="topPicTitle" >{pics.title}</Text>
                            <Button className="topPicPauseButton" onClick={ () =>   navigate(`/trailer/${pics.id}`)    } >Trailer</Button>
                            <Button className="topPicButton" onClick={()=>removeFromWatchList(pics)}   >- Remove</Button>

                        </Box>
                    </Box>
                )))  
                 :
                 user ?  (
                    <div style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:'center',margin:'auto',marginBottom:'8vh'}}>
                    <img src={watchlist} style={{width:'8vw'}}/>
                    <br/>
                    <Text color="white" textAlign='center' m='2vh auto' fontSize="1.2vw">Add items to Your Watchlist</Text>
                    </div>
                 ):( <>
                 <div style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:'center',margin:'auto',marginBottom:'8vh'}}>
                <Center> <Text color="white">Sign in to Show Your Watchlist</Text></Center>
                <Center><Button bgColor='rgb(245,197,24)' color="black" marginTop="2vh" onClick={()=>navigate('/signup')}>Sign in Imdb </Button></Center>
                </div>
                 </>)
                
            }
            </Stack>
            <Stack direction={['column', 'row']} spacing='24px' margin="5vh 7%"  >
            {
                slidingData ? 
                slidingData.slice(6,11).map((pics)=>(
                    <Box key={pics.id} width={200}  bgColor="#1a1a1a" >
                        <img  height="50px" src={pics.image} alt="" />
                        <Box p={3} >
                            <Text className="topPicTitle" > ⭐ 8.7  </Text>
                            <Text className="topPicTitle" >{pics.title}</Text>
                            <Button className="topPicButton" onClick={()=>addToWatchList(pics)}   >+ Watchlist</Button>
                            <Button className="topPicPauseButton" onClick={ () =>   navigate(`/trailer/${pics.id}`)    } >Trailer</Button>
                        </Box>
                    </Box>
                ))  
                :
                <div></div>
            }
            {/* <Button>left </Button> */}
            </Stack>
            <h2 style={{color:'white',marginLeft:'7vw',fontSize:'1.5vw'}}>IMDb Originals</h2>
        <h6 style={{color:"gray",marginLeft:'7vw'}}>Celebrity interviews, trending entertainment stories, and expert analysis</h6>
        <div  className="IMDbOriginalsbox">
           <div>
           <img src="https://image.tmdb.org/t/p/original//pQ1PjmVu2VoIKixGU8g0TcdBFat.jpg" alt="" />
           <h3>Warm & Cozy </h3>
           </div>
           <div>
            <img src="https://image.tmdb.org/t/p/original//uuwhLxkLzQVyB6cMd40MBab1SDc.jpg" alt="" />
            <h3>Brain</h3>
           </div>
           <div>
            <img src="https://image.tmdb.org/t/p/original//kJw73nXlDxooReri4hW5gC48Dou.jpg" alt="" />
            <h3>Hwajung</h3>
           </div>
        </div>
            <BornToday/>
        </div>
    )
}

export default Homepage;


// let idx = Math.floor(Math. random () * (11 - 1) + 1)