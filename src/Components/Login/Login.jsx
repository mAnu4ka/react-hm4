import './Login.css';
import { Link, Text, Button, FormControl, FormErrorMessage, FormHelperText, InputRightElement, Input, InputGroup } from '@chakra-ui/react'
import { useState } from 'react'

function Login() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''
    return (
        <div>
            <div className="login">
                <div className='loginBlock'>
                    <div className="inputs">
                        <Text fontSize='36px' fontWeight='500' lineHeight='42px' textShadow=' 0px 4px 20px rgba(1, 143, 255, 0.15)' color='#ffffff'>Welcome!</Text>
                        <FormControl isInvalid={isError}>
                            <Input
                                type='email'
                                value={input}
                                onChange={handleInputChange}
                                placeholder='email'
                                _placeholder={{ color: '#616A8B' }}
                                borderRadius=' 8px'
                                background='#2E3558'
                                boxShadow='0px 4px 4px rgba(0, 0, 0, 0.05)'
                            />
                            {!isError ? (
                                <FormHelperText> </FormHelperText>
                            ) : (
                                <FormErrorMessage> </FormErrorMessage>
                            )}
                        </FormControl>
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                                borderRadius=' 8px'
                                background='#2E3558'
                                boxShadow='0px 4px 4px rgba(0, 0, 0, 0.05)'
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </div>
                    <div className="butons">
                        <Button w='105px' padding='12px'
                            background='linear-gradient(88.43deg, #2F3453 11.5%, #242845 76.7%)'
                            boxShadow='0px 4px 12px rgba(0, 0, 0, 0.15)'
                            borderRadius='8px'>
                            SIGN UP
                        </Button>
                        <Button w='105px' padding='12px'
                            background='linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)'
                            boxShadow='0px 4px 12px rgba(0, 0, 0, 0.15)'
                            borderRadius='8px'>
                            SIGN IN
                        </Button>
                    </div>
                    <Link color='#5FB2FF'>Forgot your password?</Link>
                </div>
                <div className="text text_mm">
                    <Text>valuet</Text>
                    <div className="line"></div>
                    <Text>Your currency dashboard</Text>
                </div>
            </div>
        </div>
    );
}

export default Login;
