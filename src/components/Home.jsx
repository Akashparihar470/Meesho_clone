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
import "../style/Poster.css"



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
          <Poster/>
        <Flex justifyContent={"space-around"}>
            <Box w={"400px"} h={"1px"} bg={"rgb(247, 168, 202)"} marginTop={4}></Box>
            <Box>        <Heading fontSize={{base:"10px", md:"20",lg:"35px"}} >Top Categories to choose from</Heading></Box>
            <Box w={"400px"} h={"1px"} bg={"rgb(247, 168, 202)"} marginTop={4}></Box>
        </Flex>
        <Poster2/>
        <Flex justifyContent={"space-around"}>
            <Box w={"400px"} h={"1px"} bg={"rgb(247, 168, 202)"} marginTop={4}></Box>
            <Box>        <Heading fontSize={{base:"10px", md:"20",lg:"35px"}} >Products for You</Heading></Box>
            <Box w={"400px"} h={"1px"} bg={"rgb(247, 168, 202)"}marginTop={4} ></Box>
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