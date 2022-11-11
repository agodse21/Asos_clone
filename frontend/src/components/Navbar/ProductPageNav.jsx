import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "../../style/navbar.css";
import styles from "./nav.module.css";

export const ProductPageNav = () => {
  return (
    <Box w="100%" h={"50px"} bgColor={"#525050"}>
      <Flex alignItems={"center"} ml={250}> 
         <Box  className="dropdown">
 
  <Flex className="dropbtn" transform={"skew(-10deg)"} alignItems={"center"} 
w="80px" justifyContent={"center"} bgColor={"#d01345"} h="100%" mr="10px">
    <Text  transform={"skew(10deg)"} _hover={{transform:"skew(0deg)"}}>Sale</Text></Flex>
  <Box className="dropdown-content">
    <Heading size={"sm"}>SHOP BY PRODUCT</Heading>
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  </Box>
</Box> 
<Box className="dropdown">
  <Box className="dropbtn">New in</Box>
  <Box className="dropdown-content">
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  </Box>
  

</Box>
<Box className="dropdown">
  <Box className="dropbtn">Cloathing</Box>
  <Box className="dropdown-content">
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  </Box>
</Box>  
<Box className="dropdown">
  <Box className="dropbtn">Dresses</Box>
  <Box className="dropdown-content">
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  </Box>
</Box> 
<Box className="dropdown">
  <Box className="dropbtn">Shoes</Box>
  <Box className="dropdown-content">
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  </Box>
</Box> 
<Box className="dropdown">
  <Box className="dropbtn">Sportwear</Box>
  <Box className="dropdown-content">
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  </Box>
</Box> 
<Box className="dropdown">
  <Box className="dropbtn">Accessories</Box>
  <Box className="dropdown-content">
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  </Box>
</Box> 
<Box className="dropdown">
  <Box className="dropbtn">Autumn</Box>
  <Box className="dropdown-content">
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  </Box>
</Box> 
<Box className="dropdown">
  <Box className="dropbtn">Gifting</Box>
  <Box className="dropdown-content">
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  </Box>
</Box> 
<Box className="dropdown">
  <Box className="dropbtn">Topshop</Box>
  <Box className="dropdown-content">
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  </Box>
</Box> 
<Box className="dropdown">
  <Box className="dropbtn">Face+Body</Box>
  <Box className="dropdown-content">
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  </Box>
</Box> 
<Box className="dropdown">
  <Box className="dropbtn">Brands</Box>
  <Box className="dropdown-content">
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  </Box>
</Box> 
         <Box className="dropdown">
 
  <Flex className="dropbtn" transform={"skew(-10deg)"} alignItems={"center"} 
w="80px" justifyContent={"center"} bgColor={"#d01345"} h="100%" mr="10px">
    <Text  transform={"skew(10deg)" } _hover={{transform:"skew(0deg)"}}>Outlet</Text></Flex>
  <Box  className="dropdown-content">
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  </Box>
</Box> 
<Box className="dropdown">
  <Box className="dropbtn">Marketplace</Box>
  <Box className="dropdown-content">
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  <Link to={"/home"}>Link 1</Link>
  </Box>
</Box> 
</Flex>
    </Box>
  );
};

{
  /* <Flex  color={"white"} ml={250} alignItems={"center"} h="100%" w="70%" justifyContent={"space-between"}>
<Flex  transform={"skew(-10deg)"} alignItems={"center"} 
w="80px" justifyContent={"center"} bgColor={"#d01345"} h="99%" mr="10px">
    <Text  transform={"skew(10deg)"}>Sale</Text></Flex>

<Box >
  New in</Box>
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
</Flex> */
}
