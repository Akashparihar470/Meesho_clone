import React from 'react'
import { Box, Button, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import Navbar from './Navbar'
import Footer from './Footer'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
  
  import { useNavigate } from "react-router-dom";



function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        navigate("/", { replace: true });
      }

 

  return (
    <Box>
        <Navbar/>
    <Box backgroundColor={"pink.100"} padding={8}>
        <Box  backgroundColor={"white"} width={"400px"} margin={"auto"} height={"600px"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} borderRadius={"5%"} marginTop={"20px"}> 
          <Box>
            <img src="https://images.meesho.com/images/marketing/1648820929975.jpeg" alt="" borderRadius={"5%"}/>
          </Box>
          <Box >
            <Heading as={"h3"} size="md" padding={6}>Sign Up to view your profile</Heading>
            <FormControl  padding={8}>
                <FormLabel>Phone Number</FormLabel>
                <Input/>
                <Button mt={4} onClick={onOpen} width={"300px"} marginTop={"10px"} backgroundColor={"pink.400"} color={"white"}>Send OTP</Button>
            </FormControl>
            <Text fontSize={"15px"} padding={6} marginTop={"20px"}>By continuing, you agree to Meesho’s 
                  Terms & Conditions  
                  and  
                  Privacy Policy</Text>

          </Box>

        </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter OTP</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
             <Input placeholder='OTP'></Input>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} variant='ghost'>
              Back
            </Button>
            <Button colorScheme='blue' mr={3}  onClick={handleSubmit}>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
    <Footer/>
    </Box>
  )
}

export default Login
