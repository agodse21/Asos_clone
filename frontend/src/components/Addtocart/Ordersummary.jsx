import { Box, HStack, Text, VStack,Image,Button, Divider } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import {ChevronDownIcon, InfoIcon} from "@chakra-ui/icons"
import React, { useState } from 'react'
import styles from "./Ordersummary.module.css"
import { Link } from 'react-router-dom'
const Ordersummary = ({data}) => {

  
  let quantity = data.reduce((prev, curr) => {
   return prev+Number(curr.item_no)
  },0)
  let sum = data.reduce((prev, curr) => {
    return prev+Number(curr.product_details.product_price)
  },0)

 console.log(quantity,sum)
  let totalsum = sum * quantity;
  console.log(totalsum)
  console.log(data)
  return (
    <div className={styles.ordersumbox}>
    <div className={styles.ordersum_mainbox}>
      <VStack w="100%">
        <Box alignItems="baseline">
        <Text fontSize="3xl" fontWeight="bold">TOTAL</Text>
          </Box>
          <Divider orientation='horizontal'></Divider>
          <Box w="100%">
          
          <HStack w="100%" justify="space-around">
            <Text fontWeight="bold">Sub-total</Text>
            <Text fontWeight="bold" color="red.300">${ totalsum}</Text>
            </HStack>
            
          </Box>
          <Divider orientation='horizontal'></Divider>
          <Box w="100%">
            
          <HStack justify="space-around">
              <Text>Delivery</Text>
              <InfoIcon></InfoIcon>
          </HStack>
          </Box>
          <Divider orientation='horizontal'></Divider>
        <Box>
        <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Delivery Option
  </MenuButton>
  <MenuList>
    <MenuItem minH='48px'>
      
      <span>Free</span>
    </MenuItem>
    <MenuItem minH='40px'>
     
      <span>Standard</span>
    </MenuItem>
  </MenuList>
</Menu>
        </Box>
        <Box w="100%" margin="auto">
           
               <Link to="/checkout"><Button color="white" w="200px"bg="
#008849">CHECKOUT</Button>
</Link>
        </Box>
        <Box>
          <VStack>
            <Text>WE ACCEPT</Text>
            <HStack>
              <Box w="200px" h="50px"> <Image objectFit="cover"
        // boxSize='100px'
        // borderRadius='full'
        src='https://assets.asosservices.com/asos-finance/images/marketing/single.png'
        alt='Fluffybuns the destroyer'
        // mr='120px'
      /></Box>
            
            </HStack>
            <Text>Got a discount code Add it in the next step</Text>
          </VStack>
        </Box>
      </VStack>
      </div>
      </div>
  )
}

export default Ordersummary