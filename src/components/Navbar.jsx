

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
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {FaMobile} from "react-icons/fa";
import {FaCartPlus} from "react-icons/fa";
import Cartcounter from './Cartcounter';
import {Link as Routerlink} from "react-router-dom"
import Cart from './Cart';


const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('white', 'white'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Box bg={useColorModeValue('white', 'white')} px={4} borderBottom={"1px solid grey"}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-around'}>
          <Box>
            <Routerlink to={"/"}>            <Heading color={"pink.400"}>Meesho</Heading>
</Routerlink>
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
          
          


          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                  <Text>Profile</Text>
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
          </Flex>
        </Flex>
      </Box>
      <Flex justifyContent={"center"}>
        <Box margin={4}>
        
      </Box>
      <Routerlink to={"/products"}>
         <Button margin={4}>All Categories</Button>
      </Routerlink>
      </Flex>
    </div>
  );
}