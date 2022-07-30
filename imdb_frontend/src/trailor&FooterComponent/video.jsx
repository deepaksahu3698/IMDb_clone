import React from 'react'
import { Box } from '@chakra-ui/react'
import { CloseButton, Flex, Spacer, Text, AspectRatio, Image } from '@chakra-ui/react'
import './video.css'


export const video = () => {
    return (
        <>
            <Box bg='tomato' w='100%' p={4} color='white'>
                This is the Box
            </Box>
            <Box bg='black' w='50%' p={4} color='white' ml={40}>
                <Flex >
                    <Flex alignItems='center'>
                        <CloseButton size='md' />
                        <Text ml={2}>Close</Text>
                    </Flex>
                    <Spacer />
                    <Text><span class="material-symbols-outlined">share</span></Text>
                </Flex>
            </Box>

              <div className='ImageAndVideoContainer'>
              <div className='videointrailor'>
                    <iframe
                        title='naruto'
                        src="https://www.youtube.com/embed/yZWqs-CGL-Y?list=RDyZWqs-CGL-Y"
                        allowfullscreen
                        height='500vh'
                        width='850vw'

                    />
                </div>
                <div  style={{backgroundColor:'rgb(30,30,30)'}}>
                    <div className='TrailerImage'>
                        <img src="https://imdb-api.com/images/original/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7041_AL_.jpg" alt="" />
                        <h3>The Godfather (1972)</h3>
                        <div className='AddTrailortoWatchListParent'>
                        <h1 className='AddTrailortoWatchList'><span class="material-symbols-outlined">playlist_add_circle</span></h1>
                        </div>
                    </div>
                    <hr className='videohr' />
                    <div className='trailorDetail'>
                        <p>The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.</p>
                    </div>
                </div>
              </div>

        </>
    )
}

// id
// "tt0068646"
// image
// "https://imdb-api.com/images/original/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7041_AL_.jpg"
// plot
// "The aging patriarch of an organized crime dynasty in postwar New York …"
// imDbId
// "tt0068646"
// title
// "The Godfather"
// fullTitle
// "The Godfather (1972)"
// type
// "Movie"
// year
// "1972"
// videoId
// "1x0GpEZnwa8"
// videoUrl
// "https://www.youtube.com/watch?v=1x0GpEZnwa8"
// errorMessage
// ""

