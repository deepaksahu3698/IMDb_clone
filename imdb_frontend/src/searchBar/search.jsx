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
} from '@chakra-ui/react'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';
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
        <>
            <Popover autoFocus={false} >
                <PopoverTrigger >
                    <InputGroup width='65%' marginLeft='15%'>
                    
                        <Image width='65px' marginLeft='10px' borderRadius='12px' src='data:image/png;base64,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' />
                        <InputRightElement
                            pointerEvents='none'
                            children={<SearchIcon color='gray.300' />}
                        />
                        <Input marginLeft='15px' type='text' placeholder='Search IMDb' value={inputGiven} onChange={(e) => { setInputGiven(e.target.value) }} />
                    
                    </InputGroup>
                </PopoverTrigger>
                <PopoverContent marginRight='440px' w='103%' marginLeft='30px'>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody><InputContent props={movieList}/></PopoverBody>
                </PopoverContent>
            </Popover>

        </>
    )
}