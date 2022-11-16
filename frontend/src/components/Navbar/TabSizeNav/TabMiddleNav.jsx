import {
  Box,
  Button,
  Flex,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, RepeatClockIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { SearchInput } from "../SearchInput";
import { HiOutlineHeart, HiOutlineUser } from "react-icons/hi";
import { FiShoppingBag } from "react-icons/fi";
import { GrContact } from "react-icons/gr";
import { IoBagOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
export const TabMiddleNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, loading, error } = useSelector((state) => state.CartReducer);
  const btnRef = useRef();
  const [userData, setData] = useState(
    JSON.parse(localStorage.getItem("userdata"))
  );
  const Navigate = useNavigate();
  const handelSignout = () => {
    localStorage.removeItem("userdata");
    Navigate("/signin");
  };
  return (
    <Box w="100%" h="60px" bgColor={"#525050"}>
      <Flex ml={"15px"} color="white" h={"100%"} alignItems={"center"}>
        <Box>
          <HamburgerIcon
            fontSize={40}
            ref={btnRef}
            colorScheme="teal"
            onClick={onOpen}
          />
        </Box>
        <Link to="/womenhome">
          <Box ml={"20px"}>
            <Text
              fontWeight={"bold"}
              w="100%"
              fontSize={"25px"}
              lineHeight="22px"
            >
              FASHION WORLD
            </Text>
          </Box>
        </Link>
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
                  <Box>
                    {" "}
                    {userData ? (
                      <>
                        <Flex>
                          <Text>{userData.data.firstname}</Text>
                          &nbsp;|&nbsp;{" "}
                          <Text cursor={"pointer"} onClick={handelSignout}>
                            SignOut
                          </Text>
                        </Flex>
                      </>
                    ) : (
                      <Box>
                        <Link to="/signin"> Sign In</Link>|
                        <Link to="/signup">Join</Link>
                      </Box>
                    )}
                  </Box>
                </PopoverHeader>
                <PopoverBody>
                  <Flex
                    _hover={{ color: "#0770cf" }}
                    mt={2}
                    ml={2}
                    alignItems={"center"}
                  >
                    <HiOutlineUser size={30} /> <Text ml={2}> My Account</Text>
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
     
                  <Text position={"absolute"} right="3" top="1.5">{data.length}</Text>
                </Link>
                </Box>
          </Flex>
        </Box>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader>Create your account</DrawerHeader> */}

          <DrawerBody>
            <Tabs className="font-face-pt " variant="enclosed">
              <TabList>
                <Tab
                  w="40%"
                  fontSize={"22px"}
                  borderRadius="0px"
                  fontWeight="bold"
                >
                  {" "}
                  <Link to="/womenhome">Women</Link>{" "}
                </Tab>
                <Tab
                  w="40%"
                  fontSize={"22px"}
                  borderRadius="0px"
                  fontWeight="bold"
                >
                  <Link to="/menhome">Men</Link>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <VStack w="100%" m="auto" spacing={4}>
                    <Flex
                      alignItems={"center"}
                      backgroundImage={
                        "url(https://images.asos-media.com/navigation/ww_homebuttontemplate_1746711?&$n_320w$)"
                      }
                      fontSize="25px"
                      fontWeight={"bold"}
                      p="5"
                      h="50px"
                      w="100%"
                    >
                      <Link to="/womenhome"> Home </Link>
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      backgroundImage={
                        "url(https://images.asos-media.com/navigation/2022_BLACKFRIDAY_WU_APPMOBNAV_2292X762?&$n_320w$)"
                      }
                      fontSize="25px"
                      fontWeight={"bold"}
                      p="5"
                      h="80px"
                      w="100%"
                    >
                      <Link to="/womendresses">
                        {" "}
                        25% OFF ALL DRESSES
                        <br />
                        With code: DRESSUP25{" "}
                      </Link>
                    </Flex>
                    <Flex
                     backgroundSize="cover"
                      alignItems={"center"}
                      backgroundImage={
                        "url(https://images.asos-media.com/navigation/gradient_1_1m_041021?&$n_320w$)"
                      }
                      fontSize="25px"
                      fontWeight={"bold"}
                      p="5"
                      h="80px"
                      w="100%"
                    >
                      <Link to="/womendresses"> SALE: UP TO 80% OFF</Link>
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      backgroundImage={
                        "url(https://images.asos-media.com/navigation/ww_gbl_newin_newin_4wl_119920305?&$n_320w$)"
                      }
                     backgroundSize="cover"
                      fontSize="25px"
                      fontWeight={"bold"}
                      p="5"
                      h="100px"
                      w="100%"
                    >
                      <Link to="/womennewin"> NEW IN</Link>
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      backgroundImage={
                        "url(https://images.asos-media.com/navigation/ww_sale_autumnedit_au_1m_1251578?&$n_320w$)"
                      }
                     backgroundSize="cover"
                      fontSize="25px"
                      fontWeight={"bold"}
                      p="5"
                      h="100px"
                      w="100%"
                    >
                      <Link to="/womenclothing"> CLOTHING</Link>
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      backgroundImage={
                        "url(https://images.asos-media.com/navigation/ww_gbl_toplevel_dresses_1m_117815345?&$n_320w$)"
                      }
                     backgroundSize="cover"
                      fontSize="25px"
                      fontWeight={"bold"}
                      p="5"
                      h="100px"
                      w="100%"
                    >
                      <Link to="/womendresses"> DRESSES</Link>
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      backgroundImage={
                        "url(https://images.asos-media.com/navigation/ww_gbl_shoes_toplevel2_1m_114865509?&$n_320w$)"
                      }
                     backgroundSize="cover"
                      fontSize="25px"
                      fontWeight={"bold"}
                      p="5"
                      h="100px"
                      w="100%"
                    >
                      <Link to="/womenshoe">SHOES</Link>
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      backgroundImage={
                        "url(https://images.asos-media.com/navigation/ww_sportswear_top+level+gbl_1m_114633822?&$n_320w$)"
                      }
                     backgroundSize="cover"
                      fontSize="25px"
                      fontWeight={"bold"}
                      p="5"
                      h="100px"
                      w="100%"
                    >
                      <Link to="/womensportwear">SPORTWEAR</Link>
                    </Flex>
                  </VStack>
                </TabPanel>
                <TabPanel>
                <VStack w="100%" m="auto" spacing={4}>
                    <Flex
                      alignItems={"center"}
                      backgroundImage={
                        "url(https://images.asos-media.com/navigation/mw_homebuttonnew_1826147?&$n_320w$)"
                      }
                      fontSize="25px"
                      fontWeight={"bold"}
                      p="5"
                      h="50px"
                      w="100%"
                    >
                      <Link to="/menhome"> Home </Link>
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      backgroundImage={
                        "url(https://images.asos-media.com/navigation/2022_BLACKFRIDAY_WU_APPMOBNAV_2292X762?&$n_320w$)"
                      }
                      fontSize="25px"
                      fontWeight={"bold"}
                      p="5"
                      h="80px"
                      w="100%"
                    >
                      <Link to="/mendresses">
                        {" "}
                        25% OFF ALL DRESSES
                        <br />
                        With code: DRESSUP25{" "}
                      </Link>
                    </Flex>
                    <Flex
                     backgroundSize="cover"
                      alignItems={"center"}
                      backgroundImage={
                        "url(https://images.asos-media.com/navigation/gradient_1_1m_041021?&$n_320w$)"
                      }
                      fontSize="25px"
                      fontWeight={"bold"}
                      p="5"
                      h="80px"
                      w="100%"
                    >
                      <Link to="/mendresses"> SALE: UP TO 80% OFF</Link>
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      backgroundImage={
                        "url(https://images.asos-media.com/navigation/mw_gbl_new_in_new_in_flo_118858767_4WL?&$n_320w$)"
                      }
                     backgroundSize="cover"
                      fontSize="25px"
                      fontWeight={"bold"}
                      p="5"
                      h="100px"
                      w="100%"
                    >
                      <Link to="/mennewin"> NEW IN</Link>
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      backgroundImage={
                        "url(https://images.asos-media.com/navigation/mw_gbl_clothing_clothing_flo_116031299_4WL?&$n_320w$)"
                      }
                     backgroundSize="cover"
                      fontSize="25px"
                      fontWeight={"bold"}
                      p="5"
                      h="100px"
                      w="100%"
                    >
                      <Link to="/menclothing"> CLOTHING</Link>
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      backgroundImage={
                        "url(https://images.asos-media.com/navigation/mw_uk_autumn_toplevel_1M_123064845?&$n_320w$)"
                      }
                     backgroundSize="cover"
                      fontSize="25px"
                      fontWeight={"bold"}
                      p="5"
                      h="100px"
                      w="100%"
                    >
                      <Link to="/mendresses"> DRESSES</Link>
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      backgroundImage={
                        "url(https://images.asos-media.com/navigation/mw_toplevel_shoes_gbl_1m_117448576?&$n_320w$)"
                      }
                     backgroundSize="cover"
                      fontSize="25px"
                      fontWeight={"bold"}
                      p="5"
                      h="100px"
                      w="100%"
                    >
                      <Link to="/menshoe">SHOES</Link>
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      backgroundImage={
                        "url(https://images.asos-media.com/navigation/mw_gbl_sportswear_sportswear_1585797_1m?&$n_320w$)"
                      }
                     backgroundSize="cover"
                      fontSize="25px"
                      fontWeight={"bold"}
                      p="5"
                      h="100px"
                      w="100%"
                    >
                      <Link to="/mensportwear">SPORTWEAR</Link>
                    </Flex>
                  </VStack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </Box>
  );
};
