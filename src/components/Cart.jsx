import React from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Image,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Container
  } from '@chakra-ui/react';
  import { useState } from 'react';
import Navbar from './Navbar';
import {DeleteIcon} from "@chakra-ui/icons"
import { useDispatch, useSelector } from 'react-redux';
import { Removecartdata } from '../Redux/action';
import { useNavigate } from "react-router-dom";



import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'




function Cart() {
    const cart = useSelector(store=>store.Alldata.cart);
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const navigate = useNavigate();


    async function handleSubmit(event) {
      event.preventDefault();
      navigate("/payment", { replace: true });
    }


    const removecart=(id)=>{
        dispatch(Removecartdata(id))
    }
    

  return (
    <Box>
        <Navbar/>
        <Heading>Cart</Heading>
        {cart.map(e=>
                    <Cartitem title={e.title} id={e.id} price={e.price} image={e.image} key={e.id} about={e.description} removecart={removecart}/> )}
        
        
        <Heading>SubTotal: {cart.reduce((total, item)=>total+item.price,0)}</Heading>
        
        <Button
              onClick={onOpen}
              ref={btnRef}
              rounded={'none'}
              w={'50%'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Checkout
            </Button>
            <>
        
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Contact Info</DrawerHeader>
  
            <DrawerBody>
              <FormControl>
                <FormLabel htmlFor='Name'>Name</FormLabel>
                <Input placeholder='Full Name' />
                <FormLabel htmlFor='Number'>Phone no.</FormLabel>
                <Input placeholder='Mobile Number' />
                <Heading fontSize={"20px"} padding={4} fontWeight={"500"}>Address</Heading>
                <FormLabel htmlFor='text'>House no./ Building</FormLabel>
                <Input placeholder='House no.' />
                <FormLabel htmlFor='text'>Area</FormLabel>
                <Input placeholder='Area' />
                <FormLabel htmlFor='Number'>Pincode</FormLabel>
                <Input placeholder='Pincode' />
                <FormLabel htmlFor='text'>City</FormLabel>
                <Input placeholder='City' />
                <FormLabel htmlFor='text'>State</FormLabel>
                <Input placeholder='State' />
              </FormControl>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue' onClick={handleSubmit}>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </Box>
  )
}

export default Cart

function Cartitem({title,price,image,key,about,removecart,id}){
    return(
       <Box  rounded="lg" width={"fit-content"} margin="auto" marginTop={"20px"} padding={10}>
        <Stack direction={{base:"column", md:"row"}} justifyContent="center" alignItems="center">
            <Box height={"300px"} width={"300px"}   position={"relative"} padding="0 1rem"
            _after={{
                transition: 'all .3s ease',
                content: '""',
                w: '80%',
                h: '80%',
                pos: 'absolute',
                top: "50%",
                left: "50%",
                transform:"translate(-50%,-50%)",
                backgroundImage: `url(${image})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}>
            <Image 
              padding={4}
              rounded={'lg'}
              height={260}
              width={260}
              objectFit={'content'}
              src={image}
            />
            </Box>
            <Box height={"300px"} width={"300px"}  padding={2}>
                <Stack>
                <Heading as="h3" size={"lg"}> {title}</Heading>
                <Box overflow={"hidden"} whiteSpace="nowrap">
                  <Text py={4}>{about}</Text>
                </Box>
                <Text fontWeight={700} fontSize={'xl'}>RS{price}</Text>
                <Button variant={"outline"} leftIcon={<DeleteIcon/>} onClick={()=>removecart(id)}>Remove</Button>
                </Stack>
            </Box>
        </Stack>
       </Box>
    )
}

