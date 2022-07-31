import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Menu,
    MenuButton,

    Box,
    MenuList,
    IconButton,
    Divider,
    Link
} from '@chakra-ui/react';
import imdbLogo from '../image/imdb.png';
import imdbPro from '../image/imdbPro.png';
import menu from '../image/menu.png';
import watchlist from '../image/watchlist.png';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/react';
import { useEffect, useState, useRef } from 'react';
import { InputContent } from './inputContent';
// import abc from ''
export function Search() {
    // const initialFocusRef = useRef()
    const [inputGiven, setInputGiven] = useState('');
    const [movieList, setMovieList] = useState([]);
    const [search, setSearch] = useState(0);//will be used while debouncing
    const [timer, setTimer] = useState(0);//will be used for debouncing
    async function fetchMovieDetails(inputGiven) {
        const res = await fetch(`http://localhost:3000/allMovies?q=${inputGiven}`);
        const data = await res.json();
        setMovieList(data)
    }
    useEffect(() => {
        fetchMovieDetails(inputGiven)
    }, [inputGiven])

    return (

        <>
        <Box backgroundColor={'black'} >
            <Box display='flex' gap='2%' ml={20} color='white' pb={2} >
                <Link to='/' mt={2}>

                    <Image width='68px' borderRadius='8px' src={imdbLogo} />
                </Link>
                <Box mt={1}>
                    <Menu backgroundColor='black'>
                        <MenuButton>
                            <Image width='73px' mt={3} src={menu} />
                        </MenuButton>

                        <MenuList bgColor={'black'} width='1300px'>
                            <Box>
                                <Image w='68px' src={imdbLogo} />
                            </Box>
                            <Box display={'flex'} gap={80}>
                                <Box>
                                    <h1 fs='60px'>
                                        Movies
                                    </h1>
                                </Box>
                                <Box>
                                    <h1>
                                        Tv Shows
                                    </h1>
                                </Box>
                                <Box>
                                    <headers>
                                        Awards & Events
                                    </headers>
                                </Box>
                            </Box>
                        </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <Popover autoFocus={false} >
                        <PopoverTrigger >
                            <InputGroup >

                                <InputRightElement
                                    pointerEvents='none'
                                    children={<SearchIcon color='gray.300' mt={4} />}
                                />
                                <Input w={670} h={8} mt={3} type='text' placeholder='Search IMDb' backgroundColor='white' value={inputGiven} onChange={(e) => { setInputGiven(e.target.value) }} />

                            </InputGroup>
                        </PopoverTrigger>
                        <PopoverContent w='80%' marginLeft='80px' marginRight='400px'>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody><InputContent props={movieList} /></PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Box>
                <Link to='/' mt={3}>
                    <Image width='65px' src={imdbPro} />
                </Link>
                <Box mt={2} h={9}>

                    <Divider orientation='vertical' />

                </Box>
                <Link to='/' mt={3}>

                    <Image w='80px' h={7} src={watchlist} />


                </Link>
                <Link to='/' mt={3} style={{textDecorationLine:'none'}}>
                    Sign In
                </Link>
                <Link to='/' mt={3} style={{textDecorationLine:'none'}}>
                    Eng
                </Link>
            </Box>
        </Box>
        </>
    )
}