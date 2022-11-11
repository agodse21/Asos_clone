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
import { useState } from "react";
import { useEffect } from "react";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

export default function SigninandSignup() {

  console.log(window.location.pathname)
  return (
    <Box bg={"#efefef"}>
      <Box h={"80px"}></Box>
      <Box bg={"#efefef"} w={"100%"} mb={"30px"}>
        <Image
          margin={"auto"}
          src={"https://my.asos.com/Content/images/asos-logo-2022-93x28.png"}
        />
      </Box>
      <Box w={"650px"} margin={"auto"} bg={"white"}>
        <Tabs defaultIndex={window.location.pathname === '/signin' ? 1 : 0}>
          <TabList w={"100%"} h={"100px"}>
            <Tab fontSize={"17px"} w={"50%"}>
              JOIN
            </Tab>
            <Tab fontSize={"17px"} w={"50%"}>
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
