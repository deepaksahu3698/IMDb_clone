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
    Divider
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
    const initialFocusRef = useRef()
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

        <><Box backgroundColor={'black'}>
        <Box display='flex' gap='2%' ml={20} color='white'>
            <Box mt={2}>

                <Image width='65px'  borderRadius='8px' src={imdbLogo} />
            </Box>
            <Box mt={1}>
                <Menu>
                    <MenuButton>
                        <Image src={menu}/>    
                    </MenuButton> 

                    <MenuList display="flex">
                        <Box>
                            <Box>abc</Box>
                            <Box>def</Box>
                        </Box>
                        <Box>
                            <Box>abc</Box>
                            <Box>def</Box>
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
                                children={<SearchIcon color='gray.300' />}
                            />
                            <Input w={670} mt={1} type='text' placeholder='Search IMDb' value={inputGiven} onChange={(e) => { setInputGiven(e.target.value) }} />

                        </InputGroup>
                    </PopoverTrigger>
                    <PopoverContent w='80%' marginLeft='80px'  marginRight='400px'>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody><InputContent props={movieList} /></PopoverBody>
                    </PopoverContent>
                </Popover>
            </Box>
            <Box mt={2}>
                <Image width='65px' src={imdbPro}/>
            </Box>
            <Box mt={1} h={9}>
            
                <Divider orientation='vertical' />

            </Box>
            <Box mt={2}>
                
                <Image w='80px' h={7} src={watchlist}/>
               
                
            </Box>
            <Box mt={2}>
                Sign In
            </Box>
            <Box mt={2}>
                Eng
            </Box>
        </Box>
        </Box>
        </>
    )
}