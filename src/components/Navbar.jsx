

import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Input,
  Center,
  Text,
  Heading
} from '@chakra-ui/react';
import {FaMobile} from "react-icons/fa";
import {FaCartPlus} from "react-icons/fa";
import Cartcounter from './Cartcounter';
import {Link as Routerlink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { "fa-solid fa-user" } from '@fortawesome/free-solid-svg-icons'




export default function Navbar() {
 
  return (
    <Stack minWidth={"100%"} >
      <Box display={"flex"} justifyContent={"space-around"} className='' bg={useColorModeValue('white', 'white')} px={4} borderBottom={"1px solid grey"}>
          <Box>
            <Routerlink to={"/"}><Heading color={"pink.400"}>Meesho</Heading></Routerlink>
          </Box>
             <Input placeholder='Search by Product code' size='md' w={"300px"}/>
          <Flex>
          <Flex borderRight={"1px solid gray"} spacing={6} marginTop={"15px"}>
            <Box marginTop={"5px"}><FaMobile/></Box>
             <Heading px={4} fontWeight={600} fontSize={"20px"} marginBottom={2} >Download App</Heading>
          </Flex>
           <Routerlink to={"/cart"}>
          <Box marginLeft={6}>
            <Cartcounter/>
            <Box marginLeft={2}><FaCartPlus/></Box>
          <Text >Cart</Text>
          </Box>
          </Routerlink>
          </Flex>
          
          


            <Stack direction={'row'} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                 <FontAwesomeIcon icon="fa-solid fa-user" />                  <Text>Profile</Text>
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <MenuDivider />
                  <Routerlink to={"/login"}>
                  <MenuItem>LogIn</MenuItem>
                  </Routerlink>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
      </Box>
      <Flex justifyContent={"center"}>
      <Routerlink to={"/products"}>
         <Button margin={4}>All Categories</Button>
      </Routerlink>
      </Flex>
    </Stack>
  );
}