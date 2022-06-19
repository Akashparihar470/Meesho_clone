import { Box, Flex, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Poster from './Poster'
import Poster2 from './Poster2'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { Getdata } from '../Redux/action'
import ProductSimple from './ProductSimple'
import Footer from './Footer'
import {Link as Routerlink} from "react-router-dom"


function Home() {
    const dispatch= useDispatch();
 const data = useSelector(store=>store.Alldata.Data)
  console.log(data)

  useEffect(()=>{
     dispatch(Getdata())
  },[dispatch])
  return (
    <div>
        <Navbar/>
        <Box margin={20}>
          <Poster/>
        </Box>
        <Flex>
            <Box w={"300px"} h={"1px"} bg={"rgb(247, 168, 202)"} margin={6} marginLeft={20}></Box>
            <Box>        <Heading >Top Categories to choose from</Heading></Box>
            <Box w={"300px"} h={"1px"} bg={"rgb(247, 168, 202)"} margin={6} ></Box>
        </Flex>
        <Poster2/>
        <Flex>
            <Box w={"400px"} h={"1px"} bg={"rgb(247, 168, 202)"} margin={6} marginLeft={24}></Box>
            <Box>        <Heading >Products for You</Heading></Box>
            <Box w={"400px"} h={"1px"} bg={"rgb(247, 168, 202)"} margin={6} ></Box>
        </Flex>
        <div>
            <Flex flexWrap={"wrap"} justifyContent={"space-around"} margin={20}>
            {data.map((e)=><div>
              <ProductSimple IMAGE={e.image} price={e.price} title={e.title} id={e.id}/>
              </div>
              )}
            </Flex>
        </div>
        <Footer/>
    </div>
  )
}

export default Home