import React from 'react'
import { Grid, Box, Flex, Text, Button, Select } from '@chakra-ui/react'
import Item_btc from '../../Components/item_btc/item_btc.jsx'

const Market = () => {
    let arr = [
        {
            what: 'DASH',
            mean: 'DASH',
            procent: '1.93%',
            dis_gree: true,
            cost: 1307.96,
            value: 18423,
        },
        {
            what: 'Aeternity',
            mean: 'AE',
            procent: '1.14%',
            dis_gree: false,
            cost: 1307.96,
            value: 18423,
        },
        {
            what: 'Ethereum',
            mean: 'ETH',
            procent: '1.93%',
            dis_gree: true,
            cost: 1307.96,
            value: 18423,
        },
        {
            what: 'PeerCoin',
            mean: 'PPC',
            procent: '1.93%',
            dis_gree: true,
            cost: 1307.96,
            value: 18423,
        },
        {
            what: 'BitCoin',
            mean: 'BTC',
            procent: '1.14%',
            dis_gree: true,
            cost: 1307.96,
            value: 18423,
        },
        {
            what: 'GridCoin',
            mean: 'GRC',
            procent: '1.14%',
            dis_gree: true,
            cost: 1307.96,
            value: 18423,
        },
        {
            what: 'NavCoin',
            mean: 'NAV',
            procent: '1.93%',
            dis_gree: true,
            cost: 1307.96,
            value: 18423,
        },
        {
            what: 'LiteCoin',
            mean: 'LTC',
            procent: '1.14%',
            dis_gree: true,
            cost: 1307.96,
            value: 18423,
        },
        {
            what: 'Nano',
            mean: 'NANO',
            procent: '1.14%',
            dis_gree: true,
            cost: 1307.96,
            value: 18423,
        },
    ]
    arr.map((item) => {
        if (item.dis_gree == true) {
            item.color = '#00E8AC'
        } else item.color = '#F35050' })

    return (
        <>
            <Grid templateColumns='repeat(3, 1fr)' gap='24px'>
                {arr.map((item, index) => <Item_btc key={index} item={item} />)}
            </Grid>
        </>
    )

}

export default Market