import { Box, Flex, Heading, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

function Poster() {
  return (
        <Flex  className='con' alignItems={"center"} padding={[2,6,8,8]} minChildWidth={"400px"} w={["95%","90%","80%","80%"]} margin={"auto"} justifyContent={"space-around"}>
            <Box bg={"rgb(249, 249, 249)"} width={["100%","100%","70%","60%"]} height={["150px","200px","85%","90%"]} className={"hposter"}>
                <Heading p={[4, 4, 6, 8]} fontSize={{base:"10px", md:"20",lg:"35px"}}>Lowest Prices <br />
                  Best Quality <br /> Shopping</Heading>
                  <Button p={[2, 2, 4, 6]} color='grey'width={["60%","60%","60%","60%"]} height={["20px","30px","100%","100%"]} fontSize={{base:"5px", md:"10px",lg:"15px"}} bg={"white"} >1 Crore+ Products | 650+ Categories</Button><br />
                  <Button p={[2, 2, 4, 6]} margin={4}  fontSize={{base:"8px", md:"16px",lg:"24px"}} height={["20px","30px","100%","100%"]} fontWeight={600} bg={'pink.400'} color={"white"}>Download the Meesho app</Button>
            </Box>
            <Box minChildWidth={"300px"} justifyContent={'center'}>
                <Image className={"poster"} height={["150px","200px","85%","90%"]} width={["300px","100%","100%","550px"]} src="https://images.meesho.com/images/marketing/1631722939962.webp" alt="" />
            </Box>
        </Flex>
  )
}

export default Poster