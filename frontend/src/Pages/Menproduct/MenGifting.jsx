import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Collapse,
  Flex,
  Heading,
  Image,
  Select,
  SimpleGrid,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadProduct, loadProductWithQuery } from "../../Redux/App/action";
import { ProductList } from "./productList";
export const MenGifting = () => {
  const [show, setShow] = useState(false);
  const dispatch=useDispatch();
  const products  = useSelector((state) => state.AppReducer.products);

  useEffect(() => {
    // = (type,page,limt)
    dispatch(loadProduct("men",""));
    // dispatch( loadProductWithQuery("men",7,12));
  }, [dispatch]);

  const handleToggle = () => setShow(!show);
const HandleSort=(e)=>{
  dispatch(loadProduct("women","sale"));
}
  return (
    <Box mb={10}>
       {
        products.length===0 ? 
        <Flex justifyContent={"center"}>
        <Image src="https://cdn.dribbble.com/users/1415337/screenshots/10781083/loadingdots2.gif" alt="x" />
        </Flex> :<> 
      <Box w="85%" m="auto" mt={3} mb={3}>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Men</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Gifting</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <hr />
      <Box w="85%" m="auto" mt={5}>
        <Center>
          <Heading size={"md"}>Men's Gifting</Heading>
        </Center>
        <VStack w="80%" m={"auto"} mt={4}>
          <Collapse startingHeight={20} in={show}>
            Waiting for payday before you complete your checkout? Forget that,
            and discover hundreds of styles from all your favourite ASOS brands
            right here in our sale. With savings of up to 80%, what’s not to
            love? From the latest activewear for less to super-cosy loungewear,
            we’ve got the stuff to shake up your wardrobe in our women’s sale.
            ASOS DESIGN has got you covered when it comes to discounted casual
            clothing, from dresses in standout prints to basic cotton tees and
            perfect pairs of distressed jeans. If you’re hoping to find some new
            swimwear, there’s plenty of better-than-half-price bikinis, too.
            From the latest heels for less to discounted gym trainers, you’ll
            find plenty of sale shoes courtesy of your fave brands, including
            adidas Originals and Miss KG. You’ll find plenty of discount shoes
            courtesy of your fave brands, including adidas Originals and Miss
            KG. From new weekend wear to a memorable dress for an upcoming
            event, you’re bound to find something you love in our women’s sale.
            We’ve also got sale clothes in our ASOS Curve range, so you can
            always find cheap clothing that’s just the right fit for your unique
            shape.
          </Collapse>

          <Button
            bgColor={"transparent"}
            size="md"
            onClick={handleToggle}
            mt="1rem"
          >
            View {show ? "Less" : "More"}
          </Button>
        </VStack>
      </Box>
      <hr />
      <SimpleGrid columns={[4,6,6,10]} p={[5,5,5,5]}  spacing={[5,5,5,5]} mb={2}>
      <Button mt={2} h="30px" borderRadius={"25px"} >DRESSES</Button>
        <Button mt={2} h="30px" borderRadius={"25px"}>TOPS</Button>
        <Button mt={2} h="30px" borderRadius={"25px"}>JEMSUITES</Button>
        <Button mt={2} h="30px" borderRadius={"25px"}>SHORTS</Button>
        <Button mt={2} h="30px" borderRadius={"25px"}>SHOES</Button>
        <Button mt={2} h="30px" borderRadius={"25px"}>BEACHWEAR</Button>
        <Button mt={2} h="30px" borderRadius={"25px"}> TROUSERS</Button>
        <Button mt={2} h="30px" borderRadius={"25px"}>JEANS</Button>
        <Button mt={2} h="30px" borderRadius={"25px"}>ACTIVEWEAR</Button>
        <Button mt={2} h="30px" borderRadius={"25px"}>JACKETS</Button>
     </SimpleGrid>
      <hr />
      <Box  mb={2} bgColor="#EEEEEE">
      <SimpleGrid   w={["95%","90%","90%","85%"]} m="auto" p={2} columns={[2,3,4,6]} spacing={[5]}>
     <Select onChange={(e)=>HandleSort(e)} _hover={{color:"#0770cf"}} borderTop={"1px solid black"} borderLeft="none" borderRight="none" borderRadius="0px" borderBottom={"1px solid black"}>
  <option value=''>Sort</option>
 
  <option value='asc'>Price Low to high</option>
  <option value='desc'>Price High to Low</option>
</Select>
<Select _hover={{color:"#0770cf"}} borderTop={"1px solid black"} borderLeft="none" borderRight="none" borderRadius="0px" borderBottom={"1px solid black"}>
  <option value=''>Discount %</option>
  <option value='option2'>Up to 20%</option>
  <option value='option3'>Up to 50%</option>
  <option value='lowtohigh'>Up to 75%</option>
  <option value='hightolow'>Up to 100%</option>
</Select>
<Select _hover={{color:"#0770cf"}} borderTop={"1px solid black"} borderLeft="none" borderRight="none" borderRadius="0px" borderBottom={"1px solid black"}>
  <option value=''>Category</option>
  <option value='shoes'>shoes</option>
  <option value='boot'>Boot</option>
  <option value='one peace'>One Peace</option>
  <option value='jacket'>Jackets</option>
</Select>
<Select _hover={{color:"#0770cf"}} borderTop={"1px solid black"} borderLeft="none" borderRight="none" borderRadius="0px" borderBottom={"1px solid black"}>
  <option value=''>Product Type</option>
  <option value='shoes'>shoes</option>
  <option value='boot'>Boot</option>
  <option value='one peace'>One Peace</option>
  <option value='jacket'>Jackets</option>
</Select>
<Select _hover={{color:"#0770cf"}} borderTop={"1px solid black"} borderLeft="none" borderRight="none" borderRadius="0px" borderBottom={"1px solid black"}>
  <option value=''>Style</option>
  <option value='shoes'>Other</option>
  <option value='boot'>Regular</option>
  <option value='one peace'>Fit</option>
  <option value='jacket'>Cut Out</option>
  <option value='jacket'>Wrap</option>
</Select>

<Select  _hover={{color:"#0770cf"}} borderTop={"1px solid black"} borderLeft="none" borderRight="none" borderRadius="0px" borderBottom={"1px solid black"}>
  <option value=''>Brand</option>
  <option value='shoes'>ASOS 4505</option>
  <option value='boot'>ASOS Curve</option>
  <option value='one peace'>ASOS Design</option>
  <option value='jacket'>ASOS Edition</option>
  <option value='jacket'>ASOS Luxe</option>
</Select>
<Select _hover={{color:"#0770cf"}} borderTop={"1px solid black"} borderLeft="none" borderRight="none" borderRadius="0px" borderBottom={"1px solid black"}>
  <option value=''>Color</option>
  <option value='shoes'>RED</option>
  <option value='boot'>BLACK</option>
  <option value='one peace'>WHITE</option>
  <option value='jacket'>MULTI</option>
  <option value='jacket'>BROWN</option>
</Select>
<Select _hover={{color:"#0770cf"}} borderTop={"1px solid black"} borderLeft="none" borderRight="none" borderRadius="0px" borderBottom={"1px solid black"}>
  <option value=''>Body Fit</option>
  <option value='shoes'>RED</option>
  <option value='boot'>BLACK</option>
  <option value='one peace'>WHITE</option>
  <option value='jacket'>MULTI</option>
  <option value='jacket'>BROWN</option>
</Select>
<Select _hover={{color:"#0770cf"}} borderTop={"1px solid black"} borderLeft="none" borderRight="none" borderRadius="0px" borderBottom={"1px solid black"}>
  <option value=''>Size</option>
  <option value='shoes'>RED</option>
  <option value='boot'>BLACK</option>
  <option value='one peace'>WHITE</option>
  <option value='jacket'>MULTI</option>
  <option value='jacket'>BROWN</option>
</Select>
<Select _hover={{color:"#0770cf"}} borderTop={"1px solid black"} borderLeft="none" borderRight="none" borderRadius="0px" borderBottom={"1px solid black"}>
  <option value=''>Price Range</option>
  <option value='shoes'>RED</option>
  <option value='boot'>BLACK</option>
  <option value='one peace'>WHITE</option>
  <option value='jacket'>MULTI</option>
  <option value='jacket'>BROWN</option>
</Select>
        </SimpleGrid>
       
      </Box>
      <SimpleGrid columns={[2,2,3,4]} w="85%" m={"auto"} spacing={3} p={0}>
     {
      products.length>0 && products.map((item)=>
      <>
        <ProductList data={item} />
        
        
        </>
    )
     }
      </SimpleGrid>
      </>}
    </Box>
  );
};
