import React from 'react';
import { Grid, Box, Flex, Text, Button, Select, Image } from '@chakra-ui/react'

let App = (props) => {
    console.log(props.item.price_1);
    return (
        <>
            <Flex>
                <Image src={`/svg/${props.item.cource}.svg`} />
                <Flex gap='2px' flexDirection='column' marginLeft='10px'>
                    <Text fontSize={8} fontWeight={400}>{props.item.price}</Text>
                    <Text fontSize={6} fontWeight={300}>{props.item.price_1}</Text>
                </Flex>
            </Flex>
            <Box background='#644696' h={0.5} w='100%' marginTop='6px' marginBottom='6px'></Box>
        </>
    );
}

export default App
