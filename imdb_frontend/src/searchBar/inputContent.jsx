import { Image,Box,Flex,Text } from '@chakra-ui/react'
// import abc from ''
export function InputContent(props) {
    console.log(props)
        let data=props.props;
    return (
        <>
        
        {data.map((e)=>(
            <Box w='100%' color='white' background='black' margin='1px' padding='10px'>
            <Flex >
                <Image boxSize='80px' src={e.image} />
                <Box marginLeft='10px'>
                    <Text fontWeight='bold' >
                        {e.fullTitle}
                    </Text>
                    <Text fontSize='sm'>{e.year}</Text>
                    {/* <Text>{e.crew.map((name)=>(name+' '))}</Text> */}
                    {e.crew.map((name,index)=>(
                        (<span>{name}{index<e.crew.length-1?', ':''}</span>)
                        
                    ))}
                </Box>
            </Flex>
            </Box> 
        ))}
         
        </>
    )
}
        