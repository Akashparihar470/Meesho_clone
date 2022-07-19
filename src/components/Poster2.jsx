import { Box, Flex, Grid, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

function Poster2() {
  return (
    
        <SimpleGrid minChildWidth={"350px"} className='con2'  marginTop={6} justifyContent={"space-around"}>
            <Box margin={"auto"} padding={[14,4,4,6]}>  
                 <img src="https://images.meesho.com/images/marketing/1649760442043.webp" alt="" width={"380px"}/>
            </Box>
            <Box  margin={"auto"}  padding={[14,4,4,6]}>
                 <img src="https://images.meesho.com/images/marketing/1649760423313.webp" alt=""  width={"440px"}/>
            </Box>
        </SimpleGrid>
    
  )
}

export default Poster2