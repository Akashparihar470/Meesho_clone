import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/exports';
import { Box } from '@chakra-ui/react'
import { Getcartdata } from '../Redux/action';

function Cartcounter() {
    const cart = useSelector(store=>store.Alldata.cart);
   const dispatch = useDispatch()

   useEffect(()=>{
        dispatch(Getcartdata())
   },[cart.length,dispatch])
   console.log(cart)


  return (
    <Box 
    backgroundColor="pink.400"
    textColor={"white"}
    borderRadius={"50%"}
    width={"20px"}
    height={"22px"}
    marginLeft={"5px"}
   >
      {cart?.length? cart.length:0}
    </Box>
  )
}

export default Cartcounter