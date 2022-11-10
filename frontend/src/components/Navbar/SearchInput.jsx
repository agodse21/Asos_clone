import { Box, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import {Search2Icon} from '@chakra-ui/icons';
export const SearchInput = () => {
    const HandleSearch=()=>{
        alert("helo")
    }
  return (
    <Box ml={5} w="50%">
       
        <InputGroup size='md'>
        <Input borderRadius={"25px"}  bgColor="white" type={"text"} placeholder="Search for items and brand" />
      <InputRightElement width='4.5rem'>
       
          <Search2Icon color={"black"} cursor={"pointer"} mr={-10} onClick={HandleSearch}/>
      
      </InputRightElement>
    </InputGroup>
    </Box>
  )
}
