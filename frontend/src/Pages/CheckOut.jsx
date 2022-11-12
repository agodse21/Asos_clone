import { Box, Button, Flex, FormLabel, Heading, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import digicImg from "../data/digicert.svg";
export const CheckOut = () => {
  return (
    <Box w="60%" m="auto">
      <Flex
        mb={5}
        alignItems={"center"}
        justifyContent={"space-between"}
        mt={"20px"}
        mr="20px"
      >
        <Box>
          {" "}
          <Link to="/womenhome">
            <Heading size={"xl"}>Fashion World</Heading>
          </Link>
        </Box>
        <Box>
          <Heading color={"grey"} size={"xl"}>
            CHECKOUT
          </Heading>
        </Box>
        <Box>
          <Image w="80px" src={digicImg} alt="x" />
        </Box>
      </Flex>

      <Flex gap={2}>
        <Box w="60%"><Box p={5} boxShadow="lg" h="130px" >
            <Heading size={"md"}>DELIVERY COUNTRY:</Heading>
          <Flex mt={5}alignItems={"center"}><Image

_hover={{ border: "1px solid #0770cf", borderRadius: "50%" }}
            cursor={"pointer"}
            w={"40px"}
            src="https://assets.asosservices.com/storesa/images/flags/in.png"
            alt="https://assets.asosservices.com/storesa/images/flags/in.png"
          ></Image>
          <Text ml={3}> India</Text>
          <Button ml={"60%"} >CHANGE</Button>
          
            </Flex>

        </Box>
        <Box p={3} boxShadow="lg" h="160px" >
        <Heading size={"sm"}>PROMO/STUDENT CODE OR VOUCHERS</Heading>
        <Input mt={5} />
        <Button mt={5}>APPLY</Button>
        </Box>
        <Box p={5} boxShadow="lg" h="100px" >
        <Heading size={"md"}>EMAIL ADDRESS</Heading>
       <Text mt={2}>agodse9@gmail.com</Text>
        </Box>
        <Box p={5} boxShadow="lg"  >
        <Heading size={"md"}>DELIVERY ADDRESS</Heading>
        <FormLabel mt={2}>Email address</FormLabel>
       <Input mt={1} placeholder={"ad"} />        </Box>
        </Box>
        
        <Box h="400px" border={"1px solid red"} w="40%"></Box>
      </Flex>
    </Box>
  );
};
