import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

function Poster2() {
  return (
    <div>
        <Flex width={"6xl"} margin={24} marginTop={6}>
            <Box margin={6} marginLeft={10} >  
                 <img src="https://images.meesho.com/images/marketing/1649760442043.webp" alt="" />
            </Box>
            <Box borderRight={"1px solid pink"} marginLeft={28}></Box>
            <Box margin={6} marginLeft={36}>
                 <img src="https://images.meesho.com/images/marketing/1649760423313.webp" alt=""  width={"460px"}/>
            </Box>
        </Flex>
    </div>
  )
}

export default Poster2