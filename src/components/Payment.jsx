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
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Container
  } from '@chakra-ui/react';
  import { useEffect, useState } from 'react';
  import { useSelector } from 'react-redux';
 import { useDispatch } from 'react-redux';
  import { Select } from '@chakra-ui/react'
import { Getcartdata } from '../Redux/action';
import { useNavigate } from "react-router-dom";


  
  export default function Payment() {
    const navigate = useNavigate();
    const cart = useSelector(store=>store.Alldata.cart);
    const dispatch = useDispatch();

    async function handlechange(event) {
        event.preventDefault();
        navigate("/", { replace: true });
      }

    const handlesubmit = ()=>{
        alert("Your Order Successfully Placed")
        setTimeout(() => {
            handlechange()
        }, 3000);
    }

    useEffect(()=>{
        dispatch(Getcartdata())
    },[dispatch])
       
    return (
      <div>
       
        <div style={{display:"flex"}} id="main">
          <div> 
          <Container as={Stack} maxW={'8xl'} py={10} marginLeft={"200px"}>
            <Stack>
                <Heading textAlign={"left"} fontSize={"2xl"}>Payment Method</Heading>
                    <Select placeholder='Select Payment option'>
                        <option value='Cash On Delivery'>Cash On Delivery</option>
                    </Select>
            </Stack>  
          </Container>
          </div>
          <div style={{borderLeft:"1px solid black",height:"250px", marginTop:"30px", marginLeft:"300px"}}>
            <Heading textAlign={"left"} fontSize={"xl"} padding={6}>Price Details</Heading>
            <HStack spacing={20} padding={2}  borderBottom={"1px solid black"} marginLeft={4}>
               <Text>Total Product Price</Text>
               <Text>{cart.reduce((total, item)=>total+item.price,0)}</Text>
            </HStack>
            <HStack padding={6} spacing={24}>
             <Heading  fontSize={"xl"} >Order Total</Heading>
             <Heading fontSize={"xl"} >{cart.reduce((total, item)=>total+item.price,0)}</Heading>
            </HStack>
            <Button width={"280px"} color={"white"} backgroundColor={"pink.400"} onClick={handlesubmit}>Continue</Button>

          </div>
        </div>
      </div>
    );
  }







