import React, { useEffect, useState } from 'react';
import { Box, Flex, Grid, GridItem, Text, Button } from '@chakra-ui/react'
import axios from "axios";
import CurrencyInput from '../../Components/CurrencyInput/CurrencyInput'

const Exchange = ({ status }) => {
    const [currency1, setCurrency1] = useState("UZS");
    const [currency2, setCurrency2] = useState("USD");
    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [rates, setRates] = useState({});

    const API_KEY = "I8599qlFkA27N81XeBKWaFK3JQl452Mr";

    useEffect(() => {
        axios
            .get(`https://api.apilayer.com/fixer/latest?base=USD&apikey=${API_KEY}`)
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    setRates(res.data.rates);
                }
            });
    }, []);
    const handleChangeAmount1 = (amount1) => {
        setAmount2(amount1 * rates[currency2] / rates[currency1]);
        setAmount1(amount1);
    }
    const handleChangeCurrency1 = (currency1) => {
        setAmount2(amount1 * rates[currency2] / rates[currency1]);
        setCurrency1(currency1);
    }

    const handleChangeAmount2 = (amount2) => {
        setAmount1(amount2 * rates[currency1] / rates[currency2]);
        setAmount2(amount2);
    }
    const handleChangeCurrency2 = (currency2) => {
        setAmount2(amount2 * rates[currency1] / rates[currency2]);
        setCurrency2(currency2);
    }
    return (
        <Box className='Exchange'>
            <Grid className='Exchanger' w='100%' h='100' templateRows='repeat(5, 1fr)' templateColumns='repeat(2, 1fr)' columnGap='30px'>
                <GridItem colSpan={2} pt='20px'>
                    <Text fontSize='21px' fontWeight='600' color='white'>Exchange</Text>
                </GridItem>
                <GridItem colSpan={1} pt='20px'>
                    <Text fontSize='15px' fontWeight='600' color='#616A8B'>From</Text>
                </GridItem>
                <GridItem colSpan={1} pt='20px'>
                    <Text fontSize='16px' fontWeight='600' color='#616A8B'>To</Text>
                </GridItem>
                <GridItem colSpan={1} pt='10px'>
                    <Flex w='100%' h='330px' bg='linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)' borderRadius='10px' padding='32px 60px'>
                        <CurrencyInput onChangeAmount={handleChangeAmount1}
                            onChangeCurrency={handleChangeCurrency1}
                            amount={amount1}
                            currency={currency1}
                            rates={Object.keys(rates)} />
                    </Flex>
                </GridItem>
                <GridItem colSpan={1} pt='10px'>
                    <Flex w='100%' h='330px' bg='linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)' borderRadius='10px' padding='32px 60px'>
                        <CurrencyInput onChangeAmount={handleChangeAmount2}
                            onChangeCurrency={handleChangeCurrency2}
                            amount={amount2}
                            currency={currency2}
                            rates={Object.keys(rates)} />
                    </Flex>
                </GridItem>
                <GridItem colSpan={2} pt='30px'>
                    <Flex w='100%' h='180px' bg='linear-gradient(180deg, rgba(27, 18, 78, 0.2) -153.98%, #0F0B38 140.59%)' boxShadow='0px 4px 25px rgba(0, 0, 0, 0.25)' alignItems='center' justifyContent='center'>
                        <Text color='#ffffff' marginRight='20px' fontWeight='700' fontSize='24px'>{amount1} {currency1}</Text>
                        <img src='/svg/changing.svg' alt="chnging" width="500px" />
                        <Text color='#ffffff' marginLeft='10px' fontWeight='700' fontSize='24px'>{amount2} {currency2}</Text>
                    </Flex>
                </GridItem>
                <GridItem colSpan={2} pt='30px'>
                    <Flex w='100%' justify='center' >
                        <Button color='white' fontSize='20px' fontWeight='600' p='12px 20px'
                            bg='linear-gradient(88.43deg, #1288E8 11.5%, #0097E8 76.7%)'
                            boxShadow='0px 4px 12px rgba(0, 0, 0, 0.15)' borderRadius='10px'
                        >Exchange</Button>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default Exchange;