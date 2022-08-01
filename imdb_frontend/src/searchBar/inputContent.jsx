import { Image, Box, Flex, Text,Link } from '@chakra-ui/react';
import { NavLink as RouterLink } from "react-router-dom";

// import {Link} from 'react';

// import abc from ''
export function InputContent(props) {
    // console.log('props',props)
    let data = props.props;
    
    return data.length==0?<Text>Search for Movie or TV Series</Text>
    :
    (
        <>

            {data.map((e) => (
                <Link as={RouterLink} to={`/${e.id}`} style={{textDecoration:'none'}}>
                    <Box w='100%' color='white' background='black' margin='1px' padding='10px' key={e._id}>
                        <Flex >
                            <Image boxSize='80px' src={e.image} />
                            <Box marginLeft='10px'>
                                <Text fontWeight='bold' >
                                    {e.fullTitle}
                                </Text>
                                <Text fontSize='sm'>{e.year}</Text>
                                {/* <Text>{e.crew.map((name)=>(name+' '))}</Text> */}
                                {/* {e.crew.map((name, index) => (
                                    (<span>{name}{index < e.crew.length - 1 ? ', ' : ''}</span>)

                                ))} */}
                                <Text>{e.crew}</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Link>
            ))}

        </>
    )
}
