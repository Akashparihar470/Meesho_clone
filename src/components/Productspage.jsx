import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductSimple from './ProductSimple'
import { Flex } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Getdata } from '../Redux/action'
import Navbar from './Navbar'
import Footer from './Footer'

function Productspage() {
    const data = useSelector(store=>store.Alldata.Data)
    console.log(data)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(Getdata())
     },[dispatch])

  return (
    <div>
      <Navbar/>
          <Flex flexWrap={"wrap"} justifyContent={"space-around"} margin={20}>
            {data.map((e)=><div>
              <ProductSimple IMAGE={e.image} price={e.price} title={e.title} id={e.id}/>
              </div>
              )}
            </Flex>
            <Footer/>
    </div>
  )
}

export default Productspage