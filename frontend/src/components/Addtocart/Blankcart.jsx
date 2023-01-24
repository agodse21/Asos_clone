import { Box, Center, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { IoBagOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Blankcart = () => {
  return (
    <Center>
    <VStack mt={40} >
     <IoBagOutline size={90} />
        <Text>Your bag is empty</Text>

       <Link style={{color:"blue",textDecoration:"underline"}} to="/">Go There and buy Something</Link>
      
    </VStack>
    </Center>

  )
}

export default Blankcart