import React from 'react';
import { Grid, Box, Flex, Text, Button, Select, Image } from '@chakra-ui/react'

let App = (props) => {
    console.log(props);
    return (
        <Box background={props.item.bg}>
            <Text></Text>
            <Flex>
                <Flex>
                    <Image></Image>
                    <Box>
                        <Text></Text>
                        <Text></Text>
                    </Box>
                </Flex>
                <Flex flexDirection='column'>
                    { }
                </Flex>
            </Flex>
        </Box>
    );
}

export default App
