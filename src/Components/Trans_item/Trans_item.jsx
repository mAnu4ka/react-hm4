import React, { useState } from 'react'
import { Grid, Box, Flex, Text, Button, Select, Image } from '@chakra-ui/react'

const Trans_item = (props) => {
    console.log(props.item.whatabout);
    return (
        <Flex color='#ffffff' background='#2E3558' alignItems='center' justifyContent='space-between' borderRadius={5} padding='15px 24px'>
            <Flex alignItems='center'>
                <Text>{props.item.time}</Text>
                <Text marginLeft={33} marginRight={32}>{props.item.date}</Text>
                <Image marginTop={2} src={`/svg/${props.item.what}icon.svg`}></Image>
                <Image marginTop={2} src={`/svg/${props.item.whatabout}icon.svg`} marginLeft={75} marginRight={24}></Image>
                <Text>{props.item.id}</Text>
            </Flex>
            <Flex alignItems='center'>
                <Text marginRight={24}>{props.item.how_many}{props.item.whats.toUpperCase()}</Text>
                <Button background={props.item.color} _hover='' padding='5px 0px' w='85px' >{props.item.status}</Button>
            </Flex>
        </Flex>
    )
}
export default Trans_item