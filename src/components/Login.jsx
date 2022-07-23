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
import { useState } from 'react'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { authentication } from "../Auth/firebase"



function Login() {
    const [loginbutton,setLoginbutton] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();


    const [phone,setPhone] = useState("");
    const [OTP,setOTP] = useState("");

    const handlesave = (e)=>{
      setPhone(e.target.value);
    }
    const configRecaptcha=()=>{
      window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
       'size': 'invisible',
       'callback': (response) => {
         // reCAPTCHA solved, allow signInWithPhoneNumber.
       },
        defaultCountry:"IN"
     }, authentication)
    }

    const handleget=()=>{
       onOpen();
       configRecaptcha();
       let appVerifier = window.recaptchaVerifier;
       let phoneNumber ="+91"+phone;
       console.log(phoneNumber)
       signInWithPhoneNumber(authentication,phoneNumber,appVerifier)
       .then(confirmationResult => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error)
      });
    }

    const verifyOTP =(e)=>{
      let otp = e.target.value
        setOTP(otp);
        if(otp.length === 6){
         let confirmationResult = window.confirmationResult;
         confirmationResult.confirm(otp).then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(user);
          setLoginbutton(true)
          navigate("/", { replace: true });
          // ...
        }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          console.log(error)
        }); 
        }
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
                <div id='sign-in-button'> </div>
                <FormLabel>Phone Number</FormLabel>
                <Input type={"number"} onChange={handlesave}/>
                <Button mt={4} onClick={handleget} width={"300px"} marginTop={"10px"} backgroundColor={"pink.400"} color={"white"}>Send OTP</Button>
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
             <Input placeholder='OTP' value={OTP} onChange={verifyOTP}></Input>
          </ModalBody>

          {/* <ModalFooter>
            <Button onClick={onClose} variant='ghost'>
              Back
            </Button>
            <Button colorScheme='blue' mr={3}  >Submit</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </Box>
    <Footer/>
    </Box>
  )
}

export default Login
