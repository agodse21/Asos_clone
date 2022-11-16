import React, { useState } from 'react'
import { Box, HStack, VStack, Text, Image, Divider, Center, Flex, Button, Badge } from '@chakra-ui/react';
import {useDispatch} from "react-redux"
import styles from "./Cartsingleitem.module.css";
import {CloseIcon} from "@chakra-ui/icons"
import { deletecartdata, updatecartdata } from '../../Redux/Addtocart/action';
const Cartsingleitem = ({ el }) => {
  const dispatch = useDispatch()
  const [flag,setflag]=useState(false)
  const [state, setstate] = useState({
    size: el?.size,
    item_no:el?.item_no
  })
  const handledelete = (el) => {
    dispatch(deletecartdata(el?.product_id))
  }
  const handlechange = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target;
    setstate({ ...state, [name]: value });
    setflag(true)
  }
  console.log(state)
  const handlecancel = () => {
    console.log(state)
    setflag(false)
    setstate({
      size: el.size,
      item_no:el.item_no
    })
  }
  const handleupdate = () => {
    console.log(state)
    const payload =state
    dispatch(updatecartdata(payload, el.product_id))
  }
  console.log(state)
  return (
      <div className={styles.sci_mainbox}>
          <div >
          <HStack h="180px"  w="95%" margin="auto">
            <Box w="180px" h="90%" border="1px solid pink " overflow="hidden">
              <Image src={el?.product_details?.product_img}></Image>
            </Box>
            <Box textAlign="start" w="80%">
            <VStack  w="95%" border="1 px solid red">
              <HStack w="96%" justify="space-between" height="50px" marginBottom="20px">
                <Box > <Text fontSize="20px" fontWeight="bold" >${el?.product_details?.product_price}</Text>
                  <Text as="s" color="red.300">${ Number(el?.product_details?.product_price)+100}</Text></Box>

              <Box onClick={()=>handledelete(el)} as="button"><CloseIcon/></Box></HStack>
              <Box w="95%"> <Text fontStyle="oblique">{el?.product_details?.product_name}</Text>
       </Box>
           
                
                  <HStack w="95%" justify="space-between">
                    <Box>
                  <Badge borderRadius="full" px="2">{ el?.product_details?.product_color}</Badge>
                     
                    </Box>
                    <Center height='40px'>
                     <Divider orientation='vertical' />
                    </Center>;
                    
                <Box>
                  
                  {
                    el.size ? ( <HStack>
                      <Text>Size</Text>
                      <Box as="button"> <select name="size" value={state.size} onChange={handlechange}>
                            <option value="xs">XS</option>
                            <option value="x">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                      </select></Box>
                         </HStack>):<Box></Box>
                 }
                    
                    </Box>
                    <Center height='40px'>
                      <Divider orientation='vertical' />
                  </Center>
                    <Box>
                      <HStack>
                    <Text>Qty</Text>
                        <Box as="button">
                        <select name="item_no" value={state.item_no} onChange={handlechange}>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                        <option value={ 5}>5</option>
                        <option value={ 6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                        </select>
                    </Box>
                    <Box w="50%"></Box>
                    </HStack>
                    
                       
                      </Box>
                </HStack>
              
                
              </VStack>
            </Box>
           
          </HStack>
      </div>
      {
        flag ? <div>
          <Divider orientation='horizontal'></Divider>
          <HStack justify="space-evenly" h="70px">
            <Box width="60%"></Box>
            <Button onClick={handlecancel}>Cancel</Button>
            <Button onClick={()=>handleupdate(el)}>Update</Button>
          </HStack>
        </div> : <div>
            <Divider orientation='horizontal'></Divider>
          </div>
      }
    </div>
  )
}

export default Cartsingleitem