import {
  Box,
  Flex,
  Image,
  Skeleton,
  Spinner,
  Tag,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { AddtoWishList } from "../../Redux/App/action";
export const ProductList = (data) => {
  let userData = JSON.parse(localStorage.getItem("userdata")) || [];
  let token = userData.token;
  const dispatch = useDispatch();
  const toast=useToast();
  let price = data.data.price.split("£")[1];
  const loading = useSelector((state) => state.AppReducer.loading);
 
const [singleProduct, setSingleProduct] = useState({});
 useEffect(()=>{
  setSingleProduct(data.data);
 },[])
  const HandleAddtoWishList = () => {
 if (singleProduct?._id) {
          let price = singleProduct?.price;
          if (singleProduct?.price[0] === "�") {
            price = price.split("�")[1];
          } else if (singleProduct?.price[0] === "£") {
            price = price.split("£")[1];
          } else {
            price = singleProduct?.price;
          }
    
         
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
         
          dispatch(AddtoWishList(obj));
          console.log(obj)
        }
        toast({
          title: 'Product added in wishlist',
      position:"top",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
  };
  return (
    <>
      {loading === true ? (
        <Skeleton>
          <div>contents wrapped</div>
          <div>won't be visible</div>
        </Skeleton>
      ) : (
        <Box mt={5} key={data.data._id}>
          <Link to={`/productdetails/men_${data.data._id}`}>
            <Tag
              mt={2}
              position="absolute"
              color={"red"}
              bgColor={"white"}
              borderRadius={0}
            >
              -{Math.floor(Math.random() * 50)}%
            </Tag>

            <Image
              w="100%"
              src={data.data.mainImage || data.data.mainimage}
              alt="x"
            />
            <Text mt={2}>{data.data.name}</Text>
            <Flex alignItems={"center"}>
              <s>
                {" "}
                <Text fontSize={"12px"}>&pound;{data.data.price + 5}</Text>
              </s>
              <Text ml={2} fontWeight={"bold"} color={"#d01345"}>
                &pound;{data.data.price}
              </Text>
            </Flex>
          </Link>
          {/* <Link to={`/whishlist/men_${data.data._id}`}> */}
          <Flex mt={"-25px"} mr={1} justifyContent={"right"}>
            <Flex
              cursor={"pointer"}
              onClick={HandleAddtoWishList}
              justifyContent={"center"}
              borderRadius="50%"
              alignItems={"center"}
              w="40px"
              h={"40px"}
              bgColor={"white"}
              border={"1px solid black"}
            >
              <AiOutlineHeart size={30} />
            </Flex>
          </Flex>
          {/* </Link> */}
        </Box>
      )}
    </>
  );
};
