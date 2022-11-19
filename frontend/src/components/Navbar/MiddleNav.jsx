import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { RepeatClockIcon } from "@chakra-ui/icons";
import { SearchInput } from "./SearchInput";
import { HiOutlineUser, HiOutlineHeart } from "react-icons/hi";
import { IoBagOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { GrContact } from "react-icons/gr";
import { ProductPageNav } from "./ProductPageNav";
import styles from "./nav.module.css";
import SubNav from "./WomensubMenu";
import MenSubNav from "./MenSubNav";
import { BottomBanner } from "./BottomBanner";
import { useDispatch, useSelector } from "react-redux";
import { SwitchTab } from "../../Redux/App/action";
import { useState } from "react";
import { useEffect } from "react";
import { getaddcartdata } from "../../Redux/Addtocart/action";

export const MiddleNav = () => {
  const Navigate=useNavigate()
  const dispatch=useDispatch();
  const  [userData,setData]=useState(JSON.parse(localStorage.getItem('userdata')))
  const { data, loading, error } = useSelector((state) => state.CartReducer);

  const handelSignout=()=>{
    localStorage.removeItem("userdata");
Navigate("/signin")
  }
  useEffect(()=>{
dispatch(getaddcartdata())
  },[])
  const HandleTab=(type)=>{
    dispatch(SwitchTab(type))
  }
  return (
    <Tabs variant="unstyled">
      <TabList>
        <Box  h="60px" w="100%" bgColor={"#2d2d2d"}>
          <Flex
            color={"white"}
            alignItems={"center"}
            w="90%"
            h="100%"
            m={"auto"}
          > <Link to="/womenhome">
            <Box  mr="20px" fontWeight={"bold"}>
             
                <Text className={styles.Heading} lineHeight="22px">FASHION WORLD</Text>
              
            </Box></Link>
            <Tab
              borderLeft={"1px solid grey"}
              _selected={{ color: "white", bg: "#525050" }}
              w="8%"
              h="100%"
              fontWeight={"bold"}
             
            >
                <Link to={"/womenhome"}> WOMEN</Link>
            </Tab>

        <Tab
              borderRight={"1px solid grey"}
              _selected={{ color: "white", bg: "#525050" }}
              w="8%"
              h="100%"
              fontWeight={"bold"}
            >
             <Link to={"/menhome"}> MEN</Link>
            </Tab>
          
            <SearchInput />
            <Box ml={5}>
              <Flex alignItems={"center"}>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      mr={-5}
                      bgColor={"transparent"}
                      _hover={{ bgColor: "transparent" }}
                    >
                      <HiOutlineUser size={30} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent color="black">
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader bgColor={"#ddd"}>
                    <Box> { userData?<><Flex><Text>{userData.data.firstname}</Text>
                      &nbsp;|&nbsp; <Text cursor={"pointer"}
                       onClick={handelSignout}>SignOut</Text></Flex></>:
                       <Box>
                     <Link to="/signin"> Sign In</Link>|
                      <Link to="/signup">Join</Link>
                      </Box>}
                     </Box>
                    </PopoverHeader>
                    <PopoverBody>
                      <Flex
                        _hover={{ color: "#0770cf" }}
                        mt={2}
                        ml={2}
                        alignItems={"center"}
                      >
                        <HiOutlineUser size={30} />{" "}
                        <Text ml={2}> My Account</Text>
                      </Flex>
                      <Flex
                        _hover={{ color: "#0770cf" }}
                        mt={5}
                        ml={2}
                        alignItems={"center"}
                      >
                        <FiShoppingBag size={25} />
                        <Text ml={2}> My Orders</Text>
                      </Flex>
                      <Flex
                        _hover={{ color: "#0770cf" }}
                        mt={5}
                        ml={2}
                        alignItems={"center"}
                      >
                        <RepeatClockIcon fontSize={"25px"} />
                        <Text ml={2}> Returns Information</Text>
                      </Flex>
                      <Flex
                        _hover={{ color: "#0770cf" }}
                        mt={5}
                        ml={2}
                        alignItems={"center"}
                      >
                        <GrContact size={25} />
                        <Text ml={2}> Contact Preference</Text>
                      </Flex>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
               
                <Link to="/wishlist">
                  <HiOutlineHeart size={30} style={{ marginLeft: "20px" }} />
                </Link>
                <Box position={"relative"}>
                <Link to={"/cart"}>
                  {" "}
                  <IoBagOutline size={30} style={{ marginLeft: "20px" }} />
     
                  <Text position={"absolute"} right="3" top="1.5">{ data.length}</Text>
                </Link>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </TabList>
      <TabPanels>
        <TabPanel p="0" w="100%">
          <SubNav />
          <BottomBanner />
        </TabPanel>
        <TabPanel p="0" w="100%">

        {/* <SubNav /> */}
          <MenSubNav />
          <BottomBanner />
        </TabPanel>
      </TabPanels>
    </Tabs>



  );
};
