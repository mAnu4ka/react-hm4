import React from 'react'
import { Grid, Box, Flex, Text, Button, Select, Image } from '@chakra-ui/react'

const Market = (props) => {
    let arr = ['EUR', 'USD', 'BTC']
    console.log(props.item)
    return (
        <Flex color='#ffffff' background='linear-gradient(180deg, rgba(27, 18, 78, 0.2) -49.17%, #0F0B38 90.11%)' padding='16px 12px' borderRadius={5} flexDirection='column'>
            <Flex justifyContent='space-between' w='100%'>
                <Flex alignItems='center'>
                    <Image src='/svg/market.svg' marginTop={4}></Image>
                    <Box marginLeft='8px'>
                        <Text fontWeight={700} fontSize="12px">{props.item.what}</Text>
                        <Text fontWeight={700} fontSize="12px" color={props.item.color}>{props.item.color === '#F35050' ? '-' : ''}{props.item.procent}</Text>
                    </Box>
                </Flex>
                <Flex flexDirection='column' gap={4} alignItems='flex-end' w='149px'>
                    <Flex w='96px' justifyContent='space-between'>
                        {arr.map((item, index) => <Text color='#616A8B' key={index}>{item}</Text>)}
                    </Flex>
                    <Text fontWeight={600} fontSize='19px'>{props.item.cost}</Text>
                    <Flex justifyContent='space-between' w='100%'>
                        <Text color='#616A8B'>Value</Text>
                        <Flex gap='5px' alignItems='center'>
                            <Text fontWeight={600} fontSize='14px'>{props.item.value}</Text>
                            <Text color='#616A8B'>{props.item.mean}</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Image src={`/svg/${props.item.color === '#F35050' ? 'falsemarket' : 'truemarket'}.svg`} marginTop='5px'></Image>
        </Flex>
    )

}

export default Market