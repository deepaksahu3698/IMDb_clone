import { Box, Button, HStack, Stack, Text
 } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { topPicks } from "../../Redux/state";
import css from "./homepage.css"

const Homepage =() => {

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
    
    useEffect(()=>{
        getTopPicks()
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



    console.log(slidingData);



    return(
        <>
        <HStack alignItems="flex-start"  m="7%">
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
            <Stack direction={['column', 'row']} m="7%" spacing='24px'  >
            {
                slidingData ? 
                slidingData.slice(0,6).map((pics)=>(
                    <Box width={200}  bgColor="#1a1a1a" >
                        <img  height="50px" src={pics.image} alt="" />
                        <Box p={3} >
                            <Text className="topPicTitle" > ⭐ 8.7  </Text>
                            <Text className="topPicTitle" >{pics.title}</Text>
                            <Button className="topPicButton" >Watch now</Button>
                            <Button className="topPicPauseButton" >Trailer</Button>
                        </Box>
                    </Box>
                ))  
                 :
                 <div></div>
            }
            </Stack>
        </>
    )
}

export default Homepage;