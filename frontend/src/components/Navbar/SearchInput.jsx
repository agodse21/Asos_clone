import { Box, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import {Search2Icon} from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../../Redux/App/action';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const SearchInput = () => {
  const [item,setItem]=useState("")
  const Navigate=useNavigate()
  const dispatch=useDispatch();
    const HandleSearch=()=>{
        dispatch(searchProduct(item))
        Navigate("/searchproduct")
    }
    console.log(item)
  return (
    <Box ml={5} w="50%">
       
        <InputGroup size='md'>
        <Input onChange={(e)=>setItem(e.target.value)} borderRadius={"25px"} color="black"  bgColor="white" type={"text"} placeholder="Search for items and brand" />
      <InputRightElement width='4.5rem'>
       
          <Search2Icon color={"black"} cursor={"pointer"} mr={-10} onClick={HandleSearch}/>
      
      </InputRightElement>
    </InputGroup>
    </Box>
  )
}
