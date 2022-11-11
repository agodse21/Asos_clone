import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { DiApple } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";

export default function Signup() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [password, setPassword] = useState("");
  return (
    <Box style={{ fontFamily: "sans-serif" }}>
      <Text textAlign={"center"} fontSize={"20px"} mt={"30px"} fontWeight={600}>
        SIGN UP WITH...
      </Text>
      <Flex
        justifyContent="space-between"
        w={"95%"}
        h={"60px"}
        margin={"auto"}
        mt={"40px"}
      >
        <Flex
          cursor={"pointer"}
          align="center"
          justifyContent="space-Evenly"
          border={"1px solid gray"}
          w={"31%"}
        >
          <FcGoogle size={"25px"} />
          <Text fontWeight={600}>Google</Text>
        </Flex>
        <Flex
          cursor={"pointer"}
          align="center"
          justifyContent="space-Evenly"
          border={"1px solid gray"}
          w={"31%"}
        >
          <DiApple size={"25px"} />
          <Text fontWeight={600}>Apple</Text>
        </Flex>
        <Flex
          cursor={"pointer"}
          align="center"
          justifyContent="space-Evenly"
          border={"1px solid gray"}
          w={"31%"}
        >
          <IoLogoFacebook color="#3b5998" size={"25px"} />
          <Text fontWeight={600}>Facebook</Text>
        </Flex>
      </Flex>
      <Text mt={"30px"} textAlign={"center"}>
        Signing up with social is super quick. No extra passwords to remember -
        no brain fail.
      </Text>
      <Text textAlign={"center"}>
        Don't worry, we'd never share any of your data or post anything on your
        behalf #notevil
      </Text>
      <Text
        textAlign={"center"}
        fontSize={"20px"}
        mt={"30px"}
        mb={"35px"}
        fontWeight={600}
      >
        OR SIGN UP WITH EMAIL
      </Text>

      <FormControl w={"65%"} margin={"auto"}>
        <FormLabel
          color={"gray"}
          fontSize={"14px"}
          fontWeight={600}
          mt={"30px"}
        >
          EMAIL ADDRESS :
        </FormLabel>
        <Input size="lg" type="email" />
        <FormHelperText>We'll send your order confirmation here</FormHelperText>
        <FormLabel
          color={"gray"}
          fontSize={"14px"}
          fontWeight={600}
          mt={"25px"}
        >
          FIRST NAME :
        </FormLabel>
        <Input size="lg" type="text" />
        <FormLabel
          color={"gray"}
          fontSize={"14px"}
          fontWeight={600}
          mt={"20px"}
        >
          LAST NAME :
        </FormLabel>
        <Input size="lg" type="text" />
        <FormLabel
          color={"gray"}
          fontSize={"14px"}
          fontWeight={600}
          mt={"20px"}
        >
          Password :
        </FormLabel>
        <InputGroup>
          <Input
            size="lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={show ? "text" : "password"}
          />
          <InputRightElement width="4.5rem">
            {password ? (
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            ) : null}
          </InputRightElement>
        </InputGroup>
        <FormHelperText>Password Must be 6 or more characters</FormHelperText>
        <FormLabel
          color={"gray"}
          fontSize={"14px"}
          fontWeight={600}
          mt={"26px"}
          mb={0}
        >
          DATE OF BIRTH :
        </FormLabel>
        <Input size="lg" type="date" />
        <FormHelperText>You need to be 16 or over to use ASOS</FormHelperText>
        <FormLabel
          color={"gray"}
          fontSize={"14px"}
          fontWeight={600}
          mt={"50px"}
          mb={0}
        >
          MOSTLY INTERESTED IN :
        </FormLabel>
        <RadioGroup defaultValue="2">
          <Stack spacing={5} direction="row">
            <Radio size='lg' mr={'50px'} colorScheme="blue" value="1">
            Womenswear
            </Radio>
            <Radio  size='lg' colorScheme="blue" value="2">
            Menswear
            </Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <Box w={"65%"} margin={"auto"} mt={'50px'} mb={'20px'}>
        <Button w={"100%"} bg={'#2d2d2d'} color={'white'}>
          JOIN ASOS
        </Button>
      </Box>
    </Box>
  );
}
