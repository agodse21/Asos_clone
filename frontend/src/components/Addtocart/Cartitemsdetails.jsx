import { Box, HStack, VStack, Text, Image, Divider, Center } from '@chakra-ui/react';
import { CloseIcon } from "@chakra-ui/icons"
import {useDispatch,useSelector} from "react-redux"
import React, { useEffect } from 'react'
import styles from "./Cartitemsdetails.module.css";
import Cartsingleitem from './Cartsingleitem';
import { getaddcartdata } from '../../Redux/Addtocart/action';
const Cartitemsdetails = ({data}) => {
  // const {data} = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch()
  // useEffect(() => {
  //  dispatch(getaddcartdata()) 
  // }, [])
  console.log(data)
  
  return (
    <div className={styles.cartitem_d_mainbox}>
      <VStack w="100%">
        <Box>
          <HStack w="100%" h="60px" spacing="20" border="1px solid black">
            <Text  fontWeight="bold" fontSize="1xl">MY BAG</Text>
            <Text>Items are reversed for 60 minutes</Text>
          </HStack>
        </Box>
        
      </VStack>
      <div>
        {
          data && data.map((el) => (<Cartsingleitem el={ el} />))
         }
         
      
        
      </div>
    </div>
  )
}

export default Cartitemsdetails