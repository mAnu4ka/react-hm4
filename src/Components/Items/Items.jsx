import React from 'react';
import { Grid, Box, Flex, Text, Button, Select, Image } from '@chakra-ui/react'
import Itemm from "../Itemm/Itemm.jsx";
let App = (props) => {
    return (
        <Box background={props.item.bg} padding='16px' color='#ffffff' borderRadius={5}>
            <Text>{props.item.name}</Text>
            <Flex>
                <Flex alignItems='center'>
                    <Image src={`/svg/${props.item.name}.svg`} w='64px' h='64px'></Image>
                    <Box>
                        <Text>{props.item.how_many} {props.item.znak}</Text>
                        <Text color="#616A8B">${props.item.in_cost}</Text>
                    </Box>
                </Flex>
                <Flex flexDirection='column' marginLeft='20px'>
                    {props.item.curse.map((item, index) => <Itemm key={index} item={item} />)}
                </Flex>
            </Flex>
        </Box>
    );
}

export default App
