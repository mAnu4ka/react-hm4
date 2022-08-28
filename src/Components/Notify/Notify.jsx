import React from "react";
import { Image, Box, Flex,Text } from '@chakra-ui/react'
const Noty = (props) => {
    return (
        <Box >
            <Image src={props.item.img} alt="" w='23.33px' position='absolute' />
            <Flex color='#ffffff' justifyContent="center" alignItems='center' background='#0097E8' position='relative' w='16px' h='16px' borderRadius='50%' left='-6px' top='-6px'><Text fontSize='12px' fontWeight='600'>{props.item.how_many}</Text></Flex>
        </Box>
    )
}
export default Noty