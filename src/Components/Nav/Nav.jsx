import { Text, Flex, Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import './Nav.css'

const Nav = (props) => {
    let [active, setChenge] = useState(false)
    const funk = () => {
        setChenge(!active)
    }
    return (
        <Flex className={active ? 'activepropro' : null}  flexDirection='column' alignItems='center'>
            <Flex onClick={funk} width='100%' className={active ? 'activepro' : null} >
                <img src={props.item.img} alt='asd' color='#616A8B' />
                <Text marginLeft='16px' fontWeight={props.item.waight} fontSize={props.item.size}>{props.item.text}</Text>
            </Flex>
            <Box className={active ? 'active' : null} display='none' h='2px' w='97  %' bg='#1288E8' mb='1px' borderRadius='1px' ></Box>
        </Flex>
    )
}

export default Nav