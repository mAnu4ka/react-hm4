import React from 'react';
import './CurrencyInput.css'
import { Input, Box, Flex, Text } from '@chakra-ui/react'

const CurrencyInput = (props) => {
    console.log(props);
    return (
        <div>
            <div className="price">
                <select id='row' onChange={(e) => props.onChangeCurrency(e.target.value)} className='asd' fontSize='24px' fontWeight={600}>
                    {props.rates.map((item, index) => <option value={item} key={index}>{item}</option>)}
                </select >
                <img src='/svg/bitcoin.svg' width='88px' height='88px' alt="React Logo" />
            </div>
            <Flex flexDirection='column' alignItems='center'>
                <Flex background='#32395E' alignItems='center' justifyContent='space-between' w='100%'color='#ffffff' >
                    <Input color='#ffffff' border='none' value={props.amount} onChange={(e) => props.onChangeAmount(e.target.value)} />
                    <Text fontWeight='300' fontSize='24px'>{props.currency}</Text>
                </Flex>
                <Box className='line' h='2px' w='99%' bg='#1288E8' mb='1px' borderRadius='1px'></Box>
            </Flex>
        </div>
    )
}
export default CurrencyInput