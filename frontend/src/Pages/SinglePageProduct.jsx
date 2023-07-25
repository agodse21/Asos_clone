import {
  Box,
  HStack,
  VStack,
  Image,
  Text,
  Select,
  Button,
  Collapse,
  Skeleton,
  SimpleGrid,
  Flex,
  Heading,
  Center,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaTag, FaClock, FaHeart, FaTruck } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Addtocart } from "../Redux/App/action";
const SinglePageProduct = () => {
  const [size, setSize] = useState("");
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  let userData = JSON.parse(localStorage.getItem("userdata")) || [];
  let token = userData.token;
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const products  = useSelector((state) => state.AppReducer.products);
  // const cart = useSelector((state) => state.AppReducer.cart);
  
  let type = id.split("_")[0];
  let typeid = id.split("_")[1];
  const [singleProduct, setSingleProduct] = useState({});
  const [imgSrc, setImgSrc] = useState("");
  const [load, setLoad] = useState(false);


  const getdata = async () => {
   
    setLoad(true);
    await axios
      .get(
        `https://asos-backend.onrender.com/${type}product/?product_id=${typeid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },

        }
      )
      .then((r) => {
        setSingleProduct(r.data.data[0]);
        setImgSrc(r.data.data[0].mainImage || r.data.data[0].mainimage);
        setLoad(false);
      })
      .catch((err) => {
      
        setLoad(true);
      });
  };

  useEffect(() => {
    getdata();
  }, []);
 
  const handleAddtobag = () => {
    if (singleProduct?._id) {
      let price = singleProduct?.price;
      if (singleProduct?.price[0] === "�") {
        price = price.split("�")[1];
      } else if (singleProduct?.price[0] === "£") {
        price = price.split("£")[1];
      } else {
        price = singleProduct?.price;
      }

      // .split("�")[1]
      // || temp.price.split("£")[1];
     
      let obj = {
        product_id: singleProduct._id,
        product_details: {
          product_img: singleProduct?.mainImage || singleProduct?.mainimage,
          product_price: price,
          product_name: singleProduct?.name,
          product_color: singleProduct?.color,
        },
        item_no: 1,
        size: singleProduct?.size,
      };
      

      dispatch(Addtocart(obj));
      navigate("/cart");
    } else {
      alert("Your internet is slow just  wait and try agian");
    }
    // dispatch({type: CART, payload:temp });
    // navigate("/cart")
  };

  return (
    <>
      {load ? (
        <Skeleton w="25%" m={"auto"} mt={10} mb={10} height="300px" />
      ) : (
        <Box
          w={["100%", "100%", "90%"]}
          m={"auto"}
          mt={10}
          // border="1px solid red"
          mb={10}
        >
          <Flex
            flexDirection={["column", "row", "row"]}
            alignItems="center"
            justifyContent={"center"}

          >
            <Box>
              <Flex flexDirection={["row", "column", "column"]}>
                <Box marginLeft={"15px"} marginTop={"20px"}>
                  <Image
                    width={"70px"}
                    height={"70px"}
                    onClick={() => setImgSrc(singleProduct.backImage)}
                    src={singleProduct.backImage}
                    cursor={"pointer"}
                  />
                  {/* backimage */}
                </Box>
                <Box className="Box" marginLeft={"15px"} marginTop={"20px"}>
                  <Image
                    width={"70px"}
                    height={"70px"}
                    onClick={() => setImgSrc(singleProduct.sideImage)}
                    src={singleProduct.sideImage}
                    cursor={"pointer"}
                  />
                  {/* sideImage */}
                </Box>
                <Box className="Box" marginLeft={"15px"} marginTop={"20px"}>
                  <Image
                    width={"70px"}
                    height={"70px"}
                    onClick={() => setImgSrc(singleProduct.sideImage)}
                    src={singleProduct.sideImage}
                    cursor={"pointer"}
                  />
                </Box>
                {/* mainImage  */}
                <Box className="Box" marginLeft={"15px"} marginTop={"20px"}>
                  <Image
                    width={"70px"}
                    height={"70px"}
                    onClick={() => setImgSrc(singleProduct.backImage)}
                    src={singleProduct.backImage}
                    cursor={"pointer"}
                  />
                </Box>
              </Flex>
            </Box>
            <Flex justifyContent={"center"} alignItems="center" ml={5} mt={5}>
              <Image
                width={"80%"}
                height="50%"
                cursor={"pointer"}
                onClick={() => setImgSrc(singleProduct.mainImage)}
                src={imgSrc}
              />
            </Flex>
            <Box >
              <Text>{singleProduct.name}</Text>

              <Heading
                mt={5}
                color="#D01345"
                size="md"
                className="font-face-pt "
              >
                {singleProduct.price}
              </Heading>
              <Box
                className="Box"
                marginLeft={"8px"}
                width={"200px"}
                marginTop={5}
                backgroundColor={"#cde2f5"}
                border={"2 px #cde2f5"}
              >
                <HStack>
                  <Box>
                    <FaTag />
                  </Box>
                  <VStack>
                    <Box>
                      30% OFF EVERYTHING!
                      <Box>
                        <HStack>
                          <Box>With code:</Box>
                          <Box fontWeight={"bold"}>JUST4YOU</Box>
                        </HStack>
                      </Box>
                    </Box>
                  </VStack>
                </HStack>
              </Box>
              <Box className="Box" marginLeft={"5px"} marginTop={"10px"}>
                <Box>COLOUR: {singleProduct.color}</Box>
              </Box>
              <Box className="Box" marginLeft={"5px"} marginTop={"10px"}>
                <Box className="Box" marginLeft={"5px"} marginTop={"10px"}>
                  {" "}
                  Size:
                </Box>
                <Select
                  onChange={(e) => setSize(e.target.value)}
                  value={size}
                  width={"95%"}
                  marginLeft={"5px"}
                  marginTop={"10px"}
                  placeholder="Please Select"
                >
                  <option value="s">s</option>
                  <option value="m">m</option>
                  <option value="xl">xl</option>
                  <option value="xs">xs</option>
                  <option value="l">l</option>
                </Select>
              </Box>
              <Box className="Box" marginLeft={"5px"} marginTop={"10px"}>
                <HStack marginLeft={"5px"} marginTop={"10px"}>
                  <Box className="Box">
                    <FaClock />
                  </Box>
                  <Box className="Box">LOW IN STOCK</Box>
                </HStack>
              </Box>
              <Box className="Box" marginLeft={"5px"} marginTop={"10px"}>
                <HStack className="Box" marginLeft={"5px"} marginTop={"10px"}>
                  <Button
                    width={"90%"}
                    borderRedius="0px"
                    _hover={{ color: "white", bg: "fullgreen" }}
                    marginTop={"5px"}
                    textAlign={"center"}
                    color={"white"}
                    backgroundColor={"green"}
                    onClick={() => handleAddtobag()}
                  >
                    ADD TO BAG
                  </Button>
                  <Button className="Box">
                    <Box
                      className="Box"
                      textAlign={"center"}
                      marginLeft={"5px"}
                      marginTop={"10px"}
                    >
                      {" "}
                      <FaHeart />{" "}
                    </Box>
                  </Button>
                </HStack>
              </Box>
              <Box
                className="Box"
                marginLeft={"5px"}
                marginTop={"15px"}
                border={"1px solid grey"}
                p={1}
              >
                <HStack className="Box" marginLeft={"5px"}>
                  <Box className="Box" marginLeft={"5px"} marginTop={"5px"}>
                    <FaTruck />
                  </Box>
                  <Box className="Box" marginLeft={"5px"} marginTop={"5px"}>
                    <VStack
                      className="Box"
                      marginLeft={"5px"}
                      marginTop={"5px"}
                    >
                      <Box
                        className="Box"
                        textAlign={"start"}
                        marginTop={"5px"}
                      >
                        Free Delievery
                        <Box className="Box">
                          Ts&Cs apply. More delivery info
                        </Box>
                      </Box>
                    </VStack>
                  </Box>
                </HStack>
              </Box>
            </Box>
          </Flex>
          <Collapse startingHeight={20} in={show}>
    <Box
      className="Box"
      width={"100%"}
      height={"auto"}
      margin={"auto"}
      marginTop={"15px"}
      padding={"10px"}
    >
      <Flex
        className="Box"
        width={"100%"}
        height={"100%"}
        marginLeft={"5px"}
        justifyContent="center"
        flexDirection={["column","column","row"]}
      >
        <Box width={"30%"} marginLeft={"5px"} height={"100%"}>
          <Box textAlign={"start"} fontWeight={"bold"} marginTop={"80px"}>
            PRODUCT DETAILS
          </Box>
          <Text>{singleProduct.productDetails}</Text>
        </Box>

        <Box
          className="Box"
          width={["70%","55%","35%"]}
          height={"100%"}
          margin={"auto"}
          marginTop={"15px"}
          padding={"10px"}
        >
          <VStack className="Box" marginTop={"5px"}>
            <Box
              className="Box"
              height={"100px"}
              width={"100%"}
              marginTop={"5px"}
            >
              <Box
                className="Box"
                textAlign={"start"}
                fontWeight={"bold"}
                marginTop={"5px"}
              >
                PRODUCT CODE
              </Box>
              <Text>123274070</Text>
            </Box>
            <Box
              className="Box"
              height={"100%"}
              width={"100%"}
              marginTop={"5px"}
            >
              <Box
                className="Box"
                textAlign={"start"}
                fontWeight={"bold"}
                marginTop={"5px"}
              >
                BRAND
              </Box>
              <Text>{singleProduct.brand}</Text>
            </Box>
          </VStack>
        </Box>

        <Box
          className="Box"
          width={"35%"}
          height={"100%"}
          margin={"auto"}
          marginTop={"15px"}
          padding={"10px"}
        >
          <VStack className="Box" marginTop={"5px"}>
            <Box
              className="Box"
              height={"180px"}
              width={"100%"}
              marginTop={"5px"}
            >
              <Box
                className="Box"
                textAlign={"start"}
                fontWeight={"bold"}
                marginTop={"5px"}
              >
                LOOK AFTER ME
              </Box>
              <Text>{singleProduct.Lookafterme}</Text>
            </Box>
            <Box
              className="Box"
              height={"150px"}
              width={"100%"}
              marginTop={"5px"}
            >
              <Box
                className="Box"
                textAlign={"start"}
                fontWeight={"bold"}
                marginTop={"5px"}
              >
                ABOUT ME
              </Box>
              <Text>{singleProduct.aboutme}</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Box>
  </Collapse>
          <Center> 
            <Button  onClick={handleToggle}> Show {show ? "Less" : "More"}</Button>
          </Center>
        </Box>
      )}
    </>
  );
};

export default SinglePageProduct;
