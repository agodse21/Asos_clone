import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const ProductPageNav = () => {
  return (
   
    <Box w="100%" h={"50px"} bgColor={"#525050"}>
        <Flex color={"white"} ml={250} alignItems={"center"} h="100%" w="70%" justifyContent={"space-between"}>
            <Flex transform={"skew(-10deg)"} alignItems={"center"} 
            w="80px" justifyContent={"center"} bgColor={"#d01345"} h="99%" mr="10px">
                <Text  transform={"skew(10deg)"}>Sale</Text></Flex>
            <Box>New in</Box>
            <Box>Clothing</Box>
            <Box>Dresses</Box>
            <Box>Shoes</Box>
            <Box>Sportwear</Box>
            <Box>Accessories</Box>
            <Box>Autumn</Box>
            <Box>Gifting</Box>
            <Box>Topshop</Box>
            <Box>Face+Body</Box>
            <Box>Brands</Box>
            <Flex transform={"skew(-10deg)"} alignItems={"center"} 
            w="80px" justifyContent={"center"} bgColor={"#d01345"} h="99%" mr="10px">
                <Text  transform={"skew(10deg)"}>Outlet</Text></Flex>

            <Box>Marketplace</Box>
        </Flex>
    </Box>
  )
}
