import { Badge, Box, Button, Flex, Image, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineHeart} from "react-icons/ai"
export const ProductList = (data) => {
    let price=data.data.price.split("£")[1];
  // console.log("amol",price)/
  return (
    <Box mt={5} key={data.data._id} >
       <Link to={`/productdetails/${data.data._id}`}>
        <Tag mt={2} position="absolute" color={"red"} bgColor={"white"} borderRadius={0}>
          -{Math.floor(Math.random() * 50)}%
  </Tag>
 
     <Image w="100%" src={data.data.mainImage ||data.data.mainimage} alt="x"/>
            <Text mt={2}>{data.data.name}</Text>
            <Flex alignItems={"center"} >
           <s> <Text fontSize={"12px"}>&pound;{data.data.price+5}</Text></s>
            <Text  ml={2} fontWeight={"bold"} color={"#d01345"}>&pound;{data.data.price}</Text>
            </Flex>
            </Link> 
            <Link to={`/whishlist/${data.data._id}`}>
           <Flex   mt={"-25px"} mr={1} justifyContent={"right"}>
            <Flex justifyContent={"center"} borderRadius="50%" alignItems={"center"} w="40px" h={"40px"} bgColor={"white"} border={"1px solid black"} >
                <AiOutlineHeart  size={30} />
            </Flex>
           </Flex>
           </Link>
    </Box>
  )
}
