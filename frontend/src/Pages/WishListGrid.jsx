import { Box, Flex, Image, Tag, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoBagOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { Addtocart } from '../Redux/App/action'
import { deleteWishListdata, getWishListdata } from '../Redux/wishlist/action'
import { useToast } from '@chakra-ui/react'
export const WishListGrid = (data) => {
    const dispatch=useDispatch()
    const toast = useToast();
    const [singleProduct, setSingleProduct] = useState({});
    
    useEffect(() => {
      setSingleProduct(data.data);
    }, [getWishListdata]);
    const DeleteData=(id)=>{
        dispatch(deleteWishListdata(id))
        // dispatch(getWishListdata());
    }
    const HandleAddtoBag = () => {
        let obj = {
            product_id: singleProduct._id,
            product_details: {
              product_img: singleProduct.product_details.product_img              ,
              product_price: singleProduct.product_details.product_price,
              product_name: singleProduct.product_details.product_name,
              product_color: singleProduct.product_details.product_color,
            },
            item_no: 1,
            size: singleProduct.size,
          };
         
        dispatch(Addtocart(obj));
       DeleteData(singleProduct.product_id)
       toast({
        title: 'Product added in cart',
    position:"top",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    };
 
  return (
    <Box mt={5} mb={5} key={data.data._id}>
    
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
        src={data.data.product_details.product_img}
        alt="x"
      />
      <Text mt={2}>{data.data.product_details.product_name}</Text>
      <Flex alignItems={"center"}>
        <s>
          {" "}
          <Text fontSize={"12px"}>&pound;{data.data.product_details.product_price}</Text>
        </s>
        <Text ml={2} fontWeight={"bold"} color={"#d01345"}>
          &pound;{data.data.product_details.product_price - 5}.00
        </Text>
      </Flex>
   

    <Flex mt={"-25px"} mr={1} justifyContent={"right"}>
      <Flex
      onClick={HandleAddtoBag}
        justifyContent={"center"}
        borderRadius="50%"
        alignItems={"center"}
        w="40px"
        h={"40px"}
        cursor="pointer"
        bgColor={"white"}
        border={"1px solid black"}
      >
        <IoBagOutline size={30} />
      </Flex>
    </Flex>
  </Box>
  )
}
