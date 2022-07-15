import { Box, Flex, Grid, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

function Poster2() {
  return (
    
        <SimpleGrid minChildWidth={"400px"} className='con2'  marginTop={6}>
            <Box margin={"auto"} padding={5}>  
                 <img src="https://images.meesho.com/images/marketing/1649760442043.webp" alt="" width={"400px"}/>
            </Box>
            <Box minChildWidth={"400px"}  padding={5}>
                 <img src="https://images.meesho.com/images/marketing/1649760423313.webp" alt=""  width={"440px"}/>
            </Box>
        </SimpleGrid>
    
  )
}

export default Poster2