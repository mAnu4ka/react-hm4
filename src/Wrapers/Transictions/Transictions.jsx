import React, { useState } from 'react'
import './Transictions.css'
import { Grid, Box, Flex, Text, Button, Select } from '@chakra-ui/react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Efitem from '../../Components/Efitem/Efitem'
import Linechrat from '../../Components/Linechrat/Linechrat'
import Trans_item from '../../Components/Trans_item/Trans_item'
import { date } from 'faker/locale/zh_TW';

const Transictions = () => {
    let buton = ['All', 'Send', 'Recent']
    const [viewState, setViewState] = useState('all')
    let item__ = [
        {
            time: 'AM 01:16',
            date: '24 dec 2018',
            what: 'Dash',
            whats: 'Das',

            status: 'waiting',
            id: '74EKRJMXkhKDR5dj34578fgirwE22sfg',
            how_many: '0.0085'
        }, {
            time: 'AM 01:16',
            date: '24 dec 2018',
            what: 'Bitcoin',
            whats: 'btc',

            status: 'waiting',
            id: '74EKRJMXkhKDR5dj34578fgirwE22sfg',
            how_many: '0.0085'
        },
        {
            time: 'AM 01:16',
            date: '24 dec 2018',
            what: 'Bitcoin',
            whats: 'btc',
            status: 'waiting',
            id: '74EKRJMXkhKDR5dj34578fgirwE22sfg',
            how_many: '0.0085'
        },
        {
            time: 'AM 01:16',
            date: '24 dec 2018',
            what: 'Bitcoin',
            whats: 'btc',
            status: 'Error',
            id: '74EKRJMXkhKDR5dj34578fgirwE22sfg',
            how_many: '0.0085'
        },
        {
            time: 'AM 01:16',
            date: '24 dec 2018',
            what: 'Dash',
            whats: 'Das',
            status: 'Completed',
            id: '74EKRJMXkhKDR5dj34578fgirwE22sfg',
            how_many: '0.0085'
        }
    ]
    item__.map((item) => {
        if (item.status == 'Completed') {
            item.color = '#00E8ACBF'
            item.whatabout = true
        } else if (item.status == 'waiting') {
            item.color = '#32395E'
            item.whatabout = true
        } else {
            item.color = '#F35050'
            item.whatabout = false
        }
    })
    return (
        <>
            <Flex justifyContent='space-between' alignItems='center' marginBottom='28px'>
                <Text color='#FFFFFF'>Overview</Text>
                <Button padding='6px 23px' borderRadius='20px' color='#ffffff' background="linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)"
                > Add widget</Button>
            </Flex>
            <Flex justifyContent='space-between' marginBottom={13}>
                <Text fontWeight={600} fontSize={18} color='#616A8B' >{`Total ${item__.length}`}</Text>
                <Flex>
                    {buton.map((item, index) => <Button key={index} className={`viewStateBtn ${viewState === { item } ? 'active' : ''}`} position='relative' onClick={() => setViewState(item)} h='30px' p='0' bg='none' _hover='' borderRadius='5px' padding='0 10px' transition='.2s ease-in-out'>
                        <Flex w='100%' direction='column' align='center'>
                            <Text as='span' fontSize='14px' color='#616A8B' transition='.2s ease-in-out'>{item}</Text>
                            <Box className='line' position='absolute' top='28px' h='2px' w='100%' bg='#1288E8' borderRadius='1px' opacity='0' transition='.2s ease-in-out' />
                        </Flex>
                    </Button>)}
                </Flex>
            </Flex>
            <Flex flexDirection='column' gap='16px'>
                {item__.map((item, index) => <Trans_item key={index} item={item} />)}
            </Flex>
        </>
    )
}
export default Transictions