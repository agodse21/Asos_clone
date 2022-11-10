import React from 'react'
import {Box, Flex, Image, Text} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
export const TopBanner = () => {
  return (
    <Box  h="30px">
<Flex fontSize={"14px"} h="100%" alignItems={"center"} w={"100%"} justifyContent="right" gap={"20px"} pr={"120px"}>

  <Flex alignItems={"center"} pl={"15px"}borderLeft={"1px solid grey"} justifyContent={"center"}>
    <Text _hover={{color:"#0770cf"}} cursor={"pointer"}  textAlign={"center"}>Marketplace</Text>  
       
    </Flex>
    
    <Box pl={"15px"} borderLeft={"1px solid grey"}>
        <Text _hover={{color:"#0770cf"}} cursor={"pointer"}> Help & FAQs</Text>
    </Box>
    
    <Box borderLeft={"1px solid grey"} borderRight={"1px solid grey"} pr={"15px"} pl={"15px"}>
        <Image _hover={{border:"1px solid #0770cf",borderRadius:"50%"}} cursor={"pointer"} w={"20px"} src='https://assets.asosservices.com/storesa/images/flags/in.png' alt='https://assets.asosservices.com/storesa/images/flags/in.png'></Image>
    </Box>

</Flex>
    </Box>
  )
}
