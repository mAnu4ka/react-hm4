import React from 'react';
import { Grid, Box, Flex, Text, Button } from '@chakra-ui/react'

const Efitem = (props) => {
    return (
        <Flex justifyContent='space-between' alignItems='center'>
            <Flex alignItems='center' gap={5}>
                <Box background={props.item.color} w={4} h={4} borderRadius='50%' boxShadow={` 1px 1px 5px 5px ${props.item.color}80`}></Box>
                <Text fontSize={12} fontWeight={400}>{props.item.name}</Text>
            </Flex>
            <Text color={props.item.color} fontSize={12} fontWeight={700}>{props.item.procents}%</Text>
        </Flex>
    )
}

export default Efitem