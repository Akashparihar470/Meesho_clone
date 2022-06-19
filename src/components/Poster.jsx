import { Box, Flex, Heading, Button } from '@chakra-ui/react'
import React from 'react'

function Poster() {
  return (
    <div margin={"auto"}>
        <Flex mx={"6xl"} alignItems={"center"}>
            <Box bg={"rgb(249, 249, 249)"} w={"2xl"} >
                <Heading padding={8}>Lowest Prices <br />
                  Best Quality <br /> Shopping</Heading>
                  <Button color='grey' bg={"white"} padding={6}>1 Crore+ Products | 650+ Categories</Button><br />
                  <Button margin={6} padding={4} fontSize={"20px"} fontWeight={600} bg={'pink.400'} color={"white"}>Download the Meesho app</Button>
            </Box>
            <Box>
                <img width={"490px"} src="https://images.meesho.com/images/marketing/1631722939962.webp" alt="" />
            </Box>
        </Flex>
    </div>
  )
}

export default Poster