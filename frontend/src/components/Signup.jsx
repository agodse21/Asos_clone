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
import { useDispatch } from "react-redux";
import { SignupReq } from "../Redux/Auth/action";

export default function Signup() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [interest, setInterest] = useState("Womenswear");
  const dispatch = useDispatch()

  function sendSignupRequest() {
    dispatch(
    SignupReq({ email, password, firstname, lastname, dob, interest })
  )
}

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
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="lg"
          type="email"
        />
        <FormHelperText>We'll send your order confirmation here</FormHelperText>
        <FormLabel
          color={"gray"}
          fontSize={"14px"}
          fontWeight={600}
          mt={"25px"}
        >
          FIRST NAME :
        </FormLabel>
        <Input
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          size="lg"
          type="text"
        />
        <FormLabel
          color={"gray"}
          fontSize={"14px"}
          fontWeight={600}
          mt={"20px"}
        >
          LAST NAME :
        </FormLabel>
        <Input
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          size="lg"
          type="text"
        />
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
        <Input
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          size="lg"
          type="date"
        />
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
        <RadioGroup
          value={interest}
          onChange={(e) => setInterest(e)}
          defaultValue="1"
        >
          <Stack spacing={5} direction="row">
            <Radio size="lg" mr={"50px"} colorScheme="blue" value="Womenswear">
              Womenswear
            </Radio>
            <Radio size="lg" colorScheme="blue" value="Menswear">
              Menswear
            </Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <Box w={"65%"} margin={"auto"} mt={"50px"} mb={"20px"}>
        <Button
          onClick={sendSignupRequest}
          w={"100%"}
          bg={"#2d2d2d"}
          color={"white"}
        >
          JOIN ASOS
        </Button>
      </Box>
    </Box>
  );
}
