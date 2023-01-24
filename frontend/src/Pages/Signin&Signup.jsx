import {
  Box,
  Flex,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import { useLocation, useNavigate } from "react-router-dom"

export default function SigninandSignup() {
  const location=useLocation()
  // console.log(location.pathname)
  const navigate = useNavigate()
  return (
    <Box bg={"#efefef"}>
      <Box h={"80px"}></Box>
      <Flex justifyContent={"center"} fontWeight={"bold"}  bg={"#efefef"} w={"100%"} mb={"30px"}>
      <Text fontSize={"35px"} fontWeight="bold" lineHeight="22px">FASHION WORLD</Text>
      </Flex>
      <Box w={["90%","70%","70%","45%"]} margin={"auto"} bg={"white"}>
        <Tabs defaultIndex={location.pathname === '/signin' ? 1 : 0}>
          <TabList w={"100%"} h={"100px"}>
            <Tab onClick={()=> navigate('/signup')} fontSize={"17px"} w={"50%"}>
              JOIN
            </Tab>
            <Tab onClick={()=> navigate('/signin')} fontSize={"17px"} w={"50%"}>
              SIGN IN
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Signup />
            </TabPanel>
            <TabPanel>
              <Signin />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Flex mt={'18px'} w={"100%"}>
        <Flex margin={'auto'}>
          <Text  >Privacy Policy</Text>
          <Text ml={'10px'} mr={'10px'}>|</Text>
          <Text mb={'25px'} >Terms and Conditions</Text>
        </Flex>
      </Flex>
    </Box>
  );
}