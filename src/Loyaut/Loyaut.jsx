import './Loyaut.css';
import { Link, Text, Button, Flex, Input, Box, Image } from '@chakra-ui/react'
import Nav from '../Components/Nav/Nav'
import Notify from '../Components/Notify/Notify'
function Loyaut({ children }) {
    let nav = [
        {
            img: '/svg/tripl.svg',
            text: 'Overview'
        },
        {
            img: '/svg/card.svg',
            text: 'Wallets'
        },
        {
            img: '/svg/trans.svg',
            text: 'Transictions'
        },
        {
            img: '/svg/ex.svg',
            text: 'Exchange'
        },
        {
            img: '/svg/cart_marcet.svg',
            text: 'Market'
        }
    ]
    let last_div = [{
        img: "/svg/Ellipse.svg",
        text: 'Mike Jakson',
        waight: '600',
        size: '14px'
    },
    {
        img: "/svg/Exit.svg",
        text: 'Log out',
        waight: '600',
        size: '14px'
    }]
    let notification = [{
        img: '/svg/mail.svg',
        how_many: 1
    },
    {
        img: '/svg/bellon.svg',
        how_many: 8
    }]
    return (
        <main>
            <aside>
                <div className="text">
                    <Text className='dss'>valuet</Text>
                    <div className="line"></div>
                </div>
                <Flex gap='24px' flexDirection='column' marginTop='40px'>
                    {nav.map((item, index) => <Nav key={index} item={item} />)}
                </Flex>
                <Flex gap='26px' flexDirection='column' marginTop='303px'>
                    <div className="line"></div>
                    {last_div.map((item, index) => <Nav key={index} item={item} />)}
                </Flex>
            </aside>
            <Flex flexDirection='column' w='100%'>
                <header >
                    <Flex justifyContent='space-between' w='100%' alignItems='center'>
                        <Flex bgColor='#161245' borderRadius='20px' padding='7px 5px' w='298.99px'>
                            <Input variant='unstyled' color='#ffffff'></Input>
                            <Image src='/svg/search.svg' alt='search' marginRight='5px' />
                        </Flex>
                        <Flex gap='40.33px'>
                            {notification.map((item, index) => < Notify key={index} item={item} />)}
                        </Flex>
                    </Flex>
                    <Box background='#2D317A' h='2px' marginTop='24px'
                    ></Box>
                </header>

                <Box padding='28px 32px 28px 32px '>
                    {children}
                </Box>
            </Flex>
        </main>
    );
}

export default Loyaut;
