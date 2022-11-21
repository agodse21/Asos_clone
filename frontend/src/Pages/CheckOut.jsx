import {
    Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  PinInput,
  PinInputField,
  ScaleFade,
  Spinner,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import GooglePayButton from "@google-pay/button-react"
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from '@chakra-ui/react';
  import {AiFillCreditCard} from "react-icons/ai"
  import {FaCcPaypal} from "react-icons/fa"
import React, { useEffect } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import digicImg from "../data/digicert.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CleanCart, getaddcartdata } from "../Redux/Addtocart/action";
export const CheckOut = () => {
    const navigate=useNavigate()
    const [coupn,setCoupn]=useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [status,setStatus]=useState(false);
    let userData= JSON.parse(localStorage.getItem('userdata'))
    // console.log("jsjsj",)

    const dispatch=useDispatch()
  const { data, loading, error } = useSelector((state) => state.CartReducer);

  useEffect(() => {
    dispatch(getaddcartdata())
  }, [getaddcartdata])
  let quantity = data.reduce((prev, curr) => {
    return prev+Number(curr.item_no)
   },0)
   let sum = data.reduce((prev, curr) => {
     return prev+Number(curr.product_details.product_price)
   },0)
   let  totalsum;
   totalsum = sum * quantity;
   const HandleCoupn=()=>{
   
if(coupn==="FS30"){
  totalsum=totalsum-50
}
   }

  const handlePayment=()=>{
    setStatus(true)
    const timer = setTimeout(() => {
        onOpen()
    //   navigate("/Asos_clone")
      }, 1000);
      return () => clearTimeout(timer);
  }
const ClearCart=()=>{
 
  dispatch(CleanCart())
  onClose()

}
 
  return (
    <Box w={["90%","90%","95%","70%"]}   m="auto">
      <Flex
        mb={5}
        alignItems={"center"}
        flexDirection={["column","column","row"]}
        justifyContent={"space-between"}
        mt={"20px"}
        mr="20px"
       
      >
        <Box>
          {" "}
          <Link to="/womenhome">
            <Heading className="font-face-pt" size={"xl"}>Fashion World</Heading>
          </Link>
        </Box>
        <Box>
          <Heading className="font-face-pt" color={"grey"} size={"xl"}>
            CHECKOUT
          </Heading>
        </Box>
        <Box>
          <Image w="80px" src={digicImg} alt="x" />
        </Box>
      </Flex>

      <Flex gap={2}  flexDirection={["column-reverse","row","row"]} >
        <Box w={["100%","100%","60%","60%"]}>
          <Box p={5} boxShadow="lg" h="130px">
            <Heading size={"md"}>DELIVERY COUNTRY:</Heading>
            <Flex  mt={5} alignItems={"center"} justifyContent="space-between">
             <Flex alignItems={"center"}> <Image
                _hover={{ border: "1px solid #0770cf", borderRadius: "50%" }}
                cursor={"pointer"}
                w={"40px"}
             
                src="https://assets.asosservices.com/storesa/images/flags/in.png"
                alt="https://assets.asosservices.com/storesa/images/flags/in.png"
              ></Image>
              <Text ml={3}> India</Text>
              </Flex>
              <Button >CHANGE</Button>
            </Flex>
          </Box>
          <Box p={3} boxShadow="lg" h="auto">
            <Heading size={"sm"}>PROMO/STUDENT CODE OR VOUCHERS</Heading>
            <Input onChange={(e)=>setCoupn(e.target.value)} placeholder="coupan code" mt={5} />
            <Button onClick={HandleCoupn} mt={5}>APPLY</Button>
          </Box>
          <Box p={5} boxShadow="lg" h="100px">
            <Heading size={"md"}>EMAIL ADDRESS</Heading>
            <Text mt={2}>{userData.data.email}</Text>
          </Box>
          <Box p={5} boxShadow="lg">
            <Heading size={"md"}>DELIVERY ADDRESS</Heading>
            <FormLabel mt={2}>First Name</FormLabel>
            <Input placeholder={"First Name"} />{" "}
            <FormLabel mt={2}>Last Name</FormLabel>
            <Input placeholder={"Last Name"} />
            <FormLabel mt={2}>Mobile</FormLabel>
            <Input placeholder={"Mobile"} />
            <FormLabel mt={2}>Address</FormLabel>
            <Input placeholder={"Address"} />
            <FormLabel mt={2}>City</FormLabel>
            <Input placeholder={"City"} />
            <FormLabel mt={2}>Postcode</FormLabel>
            <PinInput>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </Box>
          <Box p={5} boxShadow="lg">
            <Heading size={"md"} >PAYMENT TYPE</Heading>
            {/* <Button mt={10} onClick={onToggle}>
                ADD CREDIT CARD/DEBIT CARD
            </Button>
            OR
            <Button mt={10} onClick={onToggle2}>
                PAYPAL
            </Button> */}
          <VStack align={"center"}>  <Popover>
  <PopoverTrigger >
  <Button w="300px" h="50px" mt={10} colorScheme='black' variant='outline'>
            <AiFillCreditCard  size={30}/>   &nbsp; &nbsp; ADD CREDIT CARD/DEBIT CARD
            </Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody >
        <InputGroup>
    <Input
        pr='4.5rem'
        type={"number"}
        placeholder='card number'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' >
        <AiFillCreditCard />
        </Button>
      </InputRightElement>
      </InputGroup>
      <Input mt={5}
        pr='4.5rem'
        type="date"
        placeholder='date'
      />
      <Input mt={5} mb={5}
        pr='4.5rem'
        type="text"
        placeholder='Name on card'
      />
        <FormLabel mt={2}>CVV</FormLabel>
      <PinInput  defaultValue='000'>
    <PinInputField />
    <PinInputField />
    <PinInputField />
      </PinInput>
      <Button mt={5} w="150px" variant={"outline"} colorScheme='teal' onClick={handlePayment} ml={2}>{status===true ? <Spinner />: "PLACE ORDER"}</Button>

    </PopoverBody>
  </PopoverContent>
</Popover>
<Text>OR</Text>
<GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '1234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    handlePayment()
    // console.log('load payment data', paymentRequest);
  }}
/>

</VStack>
<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
        
          <Link to="/Asos_clone" onClick={ClearCart}><ModalCloseButton /></Link>
          <ModalBody p={50}>
          <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'

>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Order Placed Successfully!
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Thanks for shopping with us. Our team will get back to you soon.
  </AlertDescription>
  
</Alert>
          </ModalBody>
          <ModalFooter>
           <Link to="/womenhome" onClick={ClearCart}><Button colorScheme='blue' mr={3} >
              Close
            </Button>
            </Link> 
            </ModalFooter>
        
        </ModalContent>
      </Modal>
 <Flex mt={10} alignItems={"center"}>
    <Heading size={"sm"}>WE ACCEPT:</Heading>
    <Image  ml={5} w="70%" src="https://assets.asosservices.com/asos-finance/images/marketing/single.png" alt="x"/>
 </Flex>

</Box>

        </Box>

        <Box  p={5}  boxShadow="lg" height={"auto"}  w={["100%","100%","40%","40%"]} >
            <Heading mb={2} size={"md"}>{data.length} ITEMS</Heading>
            <hr />
            <VStack  mb={5}>
              {data.length>0 ? data.map((item)=><><Flex  w="95%" mb={5}>
             

            <Image mt={5}  w={["100px"]} src={item.product_details.product_img} alt="x" />
            <Box mt={5} ml={5} >
                <Text  fontWeight={"bold"} color="#C53030">£{item.product_details.product_price}</Text>
                <Text>{item.product_details.product_name}</Text>
                <Text fontWeight={"bold"}> {item.product_details.product_color} &nbsp; &nbsp;M</Text>
                {/* <Text>Qty:<b> 1</b></Text> */}
            </Box>
            </Flex></>) :"Cart is Emapty"}
           
            </VStack>
            <hr />
            <Flex w="90%" m="auto" mt={5} justifyContent={"space-between"}>
                <Text>Subtotal</Text>
                <Text color="#C53030">£{(totalsum).toFixed(2)}</Text>
            </Flex>
            <Flex w="90%" m="auto" mt={5} justifyContent={"space-between"}>
                <Text>Delivery</Text>
                <Text>Free</Text>
            </Flex>
            <Flex w="90%" m="auto" mt={5} justifyContent={"space-between"}>
                <Heading size={"sm"}>TOTAL TO PAY</Heading>
                <Heading color="#C53030" size={"sm"}>£{(totalsum).toFixed(2)}</Heading>
            </Flex>
        </Box>
      </Flex>
      <Text mb={10} mt={10}>
      By placing your order you agree to our Terms & Conditions, privacy and returns policies . You also consent to some of your data being stored by ASOS, which may be used to make future shopping experiences better for you.
      </Text>
    </Box>
  );
};
