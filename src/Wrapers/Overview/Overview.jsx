import React from 'react'
import { Grid, Box, Flex, Text, Button, Select } from '@chakra-ui/react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Efitem from '../../Components/Efitem/Efitem'
import Linechrat from '../../Components/Linechrat/Linechrat'
import Items from '../../Components/Items/Items.jsx'
// import { XYPlot, XAxis, YAxis, VerticalGridLines, LineSeries } from 'react-vis';
ChartJS.register(ArcElement, Tooltip, Legend);

const Overview = () => {
    let today = new Date();
    const options = { day: 'numeric', month: 'long', weekday: 'long' };
    const options1 = { month: 'long' };
    let mouth = today.toLocaleDateString('en-US', options)
    let today_mouth = today.toLocaleDateString('en-US', options1)
    let money = 8200
    let procent = [{
        name: 'Ethereum',
        color: '#F5FBFE',
        procents: 18
    }, {
        name: 'Bitcoin',
        color: '#018FFF',
        procents: 64
    }, {
        name: 'Dash',
        color: '#FAD679',
        procents: 18
    }]
    const prosent = (tallage) => {
        return money / 100 * tallage;
    }
    let mass = []

    procent.map((item) => { mass.push(prosent(item.procents)) });

    const data = {
        datasets: [
            {
                data: mass,
                backgroundColor: [
                    '#F5FBFE',
                    '#018FFF',
                    '#FAD679',
                ],
                borderColor: [
                    '#F5FBFE',
                    '#018FFF',
                    '#FAD679',
                ],
                borderWidth: 1,
            },
        ],
    };
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let names_bitc = ['Bitcoin', 'Ethereum', 'Dash']
    let bitcoin = [
        {
            name: 'Bitcoin',
            bg: 'linear-gradient(237.07deg, #604392 -8.06%, #0F0B38 96.63%)',
            znak: 'BTC',
            how_many: '600',
            curse: [
                {
                    cource: true,
                    price: '$1 200= 0,074 BTC',
                    price_1: '1 BTC = $6 542, 35'
                },
                {
                    cource: false,
                    price: '$1 200= 0,074 BTC',
                    price_1: '1 BTC = $6 542, 35'
                },
                {
                    cource: false,
                    price: '$1 200= 0,074 BTC',
                    price_1: '1 BTC = $6 542, 35'
                },
            ]
        },
        {
            name: 'Ethereum',
            bg: 'linear-gradient(237.07deg, #6162D6 -8.06%, #0F0B38 96.63%)            ',
            znak: 'ETH',
            how_many: '600',
            curse: [
                {
                    cource: true,
                    price: '$1 200= 0,074 BTC',
                    price_1: '1 BTC = $6 542, 35'
                },
                {
                    cource: false,
                    price: '$1 200= 0,074 BTC',
                    price_1: '1 BTC = $6 542, 35'
                },
                {
                    cource: false,
                    price: '$1 200= 0,074 BTC',
                    price_1: '1 BTC = $6 542, 35'
                },
            ]
        },
        {
            name: 'Dash',
            bg: 'linear-gradient(237.07deg, #EB8338 -8.06%, #0F0B38 96.63%)',
            znak: 'AE',
            how_many: '600',
            curse: [
                {
                    cource: true,
                    price: '$1 200= 0,074 BTC',
                    price_1: '1 BTC = $6 542, 35'
                },
                {
                    cource: false,
                    price: '$1 200= 0,074 BTC',
                    price_1: '1 BTC = $6 542, 35'
                },
                {
                    cource: false,
                    price: '$1 200= 0,074 BTC',
                    price_1: '1 BTC = $6 542, 35'
                },
            ]
        },
    ]

    bitcoin.map((item) => {
        procent.map((item2) => {
            if (item.name == item2.name) {
                item.in_cost = prosent(item2.procents)
            }
        })
    })
    const news_arr = [
        {
            time: '19 hours ago',
            des: "SEC Fails to Show Court Blockvest Tokens Are Securities",
        },
        {
            time: '23 hours ago',
            des: "Report: Bitcoin Mining Doesn’t Fuel Climate Change, It Benefits the Global Economy",
        },
        {
            time: '11.22, 15:27 ',
            des: "A Look at the Multi-Currency Encrypted Messaging App ‘Chat.Chat’",
        },
        {
            time: '11.21, 11:43 ',
            des: "Four Ways to Commemorate Bitcoin’s 10th Anniversary",
        },
    ]
    return (
        <>
            <Flex justifyContent='space-between' alignItems='center' marginBottom='28px'>
                <Flex gap='40px'>
                    <Text color='#FFFFFF'>Overview</Text>
                    <Text color='#54669C'>{mouth}</Text>
                </Flex>
                <Button padding='6px 23px' borderRadius='20px' color='#ffffff' background="linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)"
                > Add widget</Button>
            </Flex>
            <Flex gap={19}>
                <Flex gap={19}>
                    <Box padding='16px 24px ' borderRadius={5} background='linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%)' >
                        <Text color='#ffffff' fontWeight={700} fontSize={14} >Balance</Text>
                        <Box w={146} h={146} marginBottom={13}>
                            <Box position='absolute'>
                                <Doughnut data={data} width='146px' height={146} />
                                <Flex position='relative' flexDirection='column' alignItems='center' justifyContent='center' top={-85} >
                                    <Text color='#0097E8' fontWeight={600} fontSize={10}>BALANCE</Text>
                                    <Text color='#FFFFFF' fontWeight={700} fontSize={10}>{`${money}$`}</Text>
                                </Flex>
                            </Box>
                        </Box>
                        <Box color='#ffffff'>
                            <Flex gap={6} flexDirection='column'>
                                {procent.map((item, index,) => <Efitem key={index} item={item} />)}
                            </Flex>
                        </Box>
                    </Box>
                    <Box padding='16px 24px' borderRadius={5} background='linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%)' >
                        <Flex justifyContent='space-between' alignItems='center'>
                            <Text color='#ffffff' fontWeight={700} fontSize={14}>Spending</Text>
                            <Select variant='unstyled' placeholder={today_mouth} color='#FFFFFF' w='80px' fontSize={14} fontWeight={300}>
                                {months.map((item, index) => <option key={index} value={item} >{item}</option>)}
                            </Select>
                        </Flex>
                        <Linechrat />
                    </Box>
                </Flex>
                <Grid templateColumns='repeat(2, 1fr)' gap='16px'>
                    {bitcoin.map((item, index) => <Items key={index} item={item} />)}
                </Grid>
            </Flex>
            <Flex marginTop='16px' gap='17px'>
                <Flex background='linear-gradient(176.95deg, rgba(27, 18, 78, 0.2) -32.8%, #0F0B38 88.83%)' borderRadius={5}>
                    <Box padding='16px' w={664.97}>
                        <Flex alignItems='center' justifyContent='space-between' >
                            <Flex alignItems='center'>
                                <Text color='#FFFFFF' fontSize={14} fontWeight={700} marginRight='24px'>Market</Text>
                                <Select variant='unstyled' color='#FFFFFF' w='80px' fontSize={14} fontWeight={300}>
                                    {names_bitc.map((item, index) => <option key={index} value={item} >{item}</option>)}
                                </Select>
                            </Flex>
                            <Select variant='unstyled' placeholder={today_mouth} color='#FFFFFF' w='80px' fontSize={14} fontWeight={300}>
                                {months.map((item, index) => <option key={index} value={item} >{item}</option>)}
                            </Select>
                        </Flex>
                        {/* <XYPlot width={300} height={300}>
                        <VerticalGridLines values={[2, 2.3, 2.7]} />
                        <XAxis />
                        <YAxis />
                        <LineSeries data={months} />
                    </XYPlot> */}
                    </Box>
                </Flex>
                <Box padding='16px' color='#ffffff' background='linear-gradient(185.19deg, rgba(27, 18, 78, 0.2) 3.73%, #0F0B38 95.83%)' borderRadius={5}>
                    <Text color='#FFFFFF' fontSize={14} fontWeight={700} marginRight='24px'>recent news</Text>
                    <Box background='#644696' h={0.5} w='100%' marginTop='6px' marginBottom='6px'></Box>
                    <Flex gap='12px' flexDirection='column'>
                        {news_arr.map((item, index) => <Flex key={index} gap="26px"><Text fontWeight={300} fontSize={12}>{item.time}</Text><Text fontWeight={600} fontSize={12}>{item.des}</Text></Flex>)}
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}

export default Overview




