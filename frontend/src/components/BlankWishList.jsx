import { Box, Center, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
// import { IoBagOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { AiOutlineHeart } from "react-icons/ai";
const BlankWishList = () => {
  return (
    <Center>
    <VStack mt={40} mb={40} >
     <AiOutlineHeart size={90} />
        <Text>Your WishList is empty</Text>

       <Link style={{color:"blue",textDecoration:"underline"}} to="/">Go There and buy Something</Link>
      
    </VStack>
    </Center>

  )
}

export default BlankWishList