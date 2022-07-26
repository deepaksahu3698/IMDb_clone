import { useParams,NavLink as RouterLink } from "react-router-dom";
import amazonPrime from "../image/amazonPrime.png";
import increasing from "../image/increasing.png";
import rate from '../image/rate.png';
import share from '../image/share.png';
import action from '../image/action.png';
import singleImdb from '../image/singleImdb.png';
import netflix from '../image/netflix.png';
import meta from '../image/meta.png';
import releatedNews from '../image/Related news.png';
import first from '../image/first.png';
import second from '../image/second.png';
import contribute from '../image/contribute.png';
import topRated from '../image/topRated.png';
import days from '../image/30days.png';
import sponsr from '../image/sponsr.png';
import trailer from '../image/trailer.webp';
import { Box, Image, Flex, Text, Divider, Button,Link } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { Search } from "./search";
// import {Link} from 'react';
export function SingleMovie() {
    let [data,setData]=useState({});
    let {id} = useParams();
    console.log(id)
    console.log('id',id)
    async function getData(id) {
        try{
        const res = await fetch(`https://imdbwebappclone.herokuapp.com/searchSingleMovie?q=${id}`);
        const e = await res.json();
        // console.log('e',e)
        setData(e.data)
        }catch(err){
            console.log(err);
            throw err
        }
    }
    
    useEffect(()=>{
        getData(id)
    },[data])

    // let data = {
    //     fullTitle: "Spider Man:Far from home",
    //     year: "2021",
    //     imDbRating: "4.1",
    //     image: "https://via.placeholder.com/300.png"
    // }
    return (
        <>
        <Search/>
            <Box background={'black'}>
                <Image ml={60} w={'70%'} src={amazonPrime} padding='10px' />
            </Box>
            <Box backgroundColor='rgb(31 31 31 / 56)'>
                <Box >
                    <Image w={'35%'} src={share} ml={'57%'} />
                </Box>
                <Flex ml={'7%'} backgroundColor='rgb(31 31 31 / 56)' color={'white'} gap={7}>
                    <Box>
                        <Text fontWeight={400} fontSize={'2rem'} fontFamily={'Roboto,Helvetica,Arial,sans-serif'}>{data.fullTitle}</Text>
                        <p>{data.year}{' · '}{'PG-13 · 2h28m'}</p>

                    </Box>

                    <Box ml={'33%'} mt={'11px'} >
                        <Text fontFamily='Roboto,Helvetica,Arial,sans-serif' fontWeight='600' fontSize='0.75rem'>
                            IMDb RATING
                        </Text>
                        <Link fontSize={18} >⭐{data.imDbRating}</Link>
                    </Box>
                    <Box mt={'11px'} pl={'13px'}>
                        <Text fontFamily='Roboto,Helvetica,Arial,sans-serif' fontWeight='600' fontSize='0.75rem'>
                            YOUR RATING
                        </Text>
                        <Link ><Image pr={'25px'} w={'115px'} src={rate} /></Link>
                    </Box>
                    <Box mt={'11px'}>
                        <Text fontFamily='Roboto,Helvetica,Arial,sans-serif' fontWeight='600' fontSize='0.75rem'>
                            POPULARITY
                        </Text>
                        <Link><Image pr={'8px'} w={'105px'} src={increasing} /></Link>
                    </Box>

                </Flex>

                <Flex ml={'7%'}>
                    <Image h={'400px'} w={'300px'} src={data.image} />
                    <Image h={'400px'} w={'900px'} src={trailer} />
                </Flex>

                <Flex pb={'20px'} mt={'15px'} gap={'7%'} color="white">
                    <Box ml={'7%'}>
                        <Link><Image w={'258px'} src={action} /></Link>
                        <Text mt={'5px'} w={'700px'} textAlign='justify' color={'white'}>
                            With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.
                        </Text>

                        <Divider mt={'10px'} orientation='horizontal' />

                        <Text mt={'10px'}>
                            <b>Director</b> <Link ml={'10px'} color={'skyblue'}>Jon Watts</Link>
                        </Text>

                        <Divider mt={'10px'} orientation='horizontal' />

                        <Text mt={'10px'}>
                            <b>Writers</b> <Link ml={'10px'} color={'skyblue'}>Chris McKenna · Erik Sommers · Stan Lee</Link>
                        </Text>

                        <Divider mt={'10px'} orientation='horizontal' />

                        <Text mt={'10px'}>
                            <b>Stars</b> <Link ml={'10px'} color={'skyblue'}>Tom Holland · Zendaya · Benedict Cumberbatch</Link>
                        </Text>

                        <Divider mt={'10px'} orientation='horizontal' />

                        <Image mt={'10px'} w={'400px'} src={singleImdb} />

                    </Box>

                    <Box w={"400px"}>
                        <Box h={'15%'} textAlign='left' backgroundColor={'#f5c518'} borderRadius='5px'>
                            <Link >
                                <Image mr={"60%"} w={'150px'} pt={'8px'} src={netflix} /><Text></Text>
                            </Link>
                        </Box>
                        <Box mt={'10px'} h={'15%'} textAlign='left' backgroundColor={'#313131'} borderRadius='5px'>
                            <Link >
                                <Text ml={"15px"} pt={'10px'}>≡ More Watch Option</Text>
                            </Link>
                        </Box>
                        <Box mt={'10px'} h={'15%'} textAlign='left' backgroundColor={'#313131'} borderRadius='5px'>
                            <Link >
                                <Text ml={"15px"} pt={'10px'}>+ Add to Watchlist</Text>
                            </Link>
​
                        </Box>
                        <Link>
                            <Image mt={'13px'} width={'300px'} src={meta} />
                        </Link>
                    </Box>
                </Flex>
            </Box>
            <Box backgroundColor={'white'}>
                <Flex gap={'150px'} ml={'7%'}>
                    <Box>
                        <Link>
                            <Image mt='15px' w={'800px'} src={days} />
                        </Link>
                        <Link>
                            <Image mt='30px' w={'800px'} src={topRated} />
                        </Link>
                    </Box>
                    <Box>
                        <Image mt='15px' w={'300px'} src={sponsr} />
                    </Box>
                </Flex>
                <Link >
                    <Image mt={'0px'} ml={'7%'} w={'250px'} src={releatedNews} />
                </Link>
                <Flex mt={'30px'} ml={'7%'} gap={'40px'}>
                    <Link>
                        <Image w={'400px'} src={first} />
                    </Link>
                    <Link>
                        <Image w={'400px'} src={second} />
                    </Link>
                </Flex>
                <Box ml={'7%'} pb={'10px'} mt='30px' color={"black"} backgroundColor='white'>
                    <Image w={'350px'} src={contribute} />
                    <Divider mt={'15px'} orientation="horizontal" backgroundColor={'black'}/>
                    <Link>
                        <Text fontSize={'20px'} mt={'15px'} ml={'10px'}><b>IMDb Answers: Help fill gaps in our data</b></Text>
                    </Link>
                    <Divider mt={'15px'} orientation="horizontal" backgroundColor={'black'}/>
                    <Link>
                        <Text fontSize={'20px'} mt={'15px'} ml={'10px'}><b>Learn more about contributing</b></Text>
                    </Link>
                    <Divider mt={'15px'} orientation="horizontal" backgroundColor={'black'}/>
                </Box>
            </Box>
​
        </>
    )
} 
