import { Box, Center, Flex, Text,  } from '@chakra-ui/react'
import React from 'react'

export const BottomBanner = () => {
  return (
    <Box zIndex={0} w="100%" h={"60px"} bgColor="#ff385c">
    <Flex alignItems={"center"} justifyContent={"space-around"}>  
    <Box w="100px" cursor={"pointer"} color={"black"} pt={1} pb={1} pl={4} pr={4} border={"2px solid black"}><Text textAlign={"center"}>Women</Text></Box>

    <Box color="black" >
       <Text mt={-1}   fontWeight={"bold"}  size={"sm"}>FOR SINGLE DAY!*</Text>
       <Text mt={-1} fontWeight={"bold"} size={"sm"}>30% OFF EVERYTHING</Text>
       <Text mt={-1}  fontWeight={"bold"} size={"sm"}>With Code:JUST4YOU</Text>
    </Box>
    <Box w="100px" cursor={"pointer"} color={"black"} pt={1} pb={1} pl={4} pr={4} border={"2px solid black"}><Text textAlign={"center"}>Men</Text></Box>


</Flex>  
    </Box>
  )
}
