import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
// FcGoogle DiApple IoLogoFacebook
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";
import { IoLogoFacebook } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { SigninReq } from "../Redux/Auth/action";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Signin() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isAuth = useSelector((e) => e.AuthReducer.isAuth);
  const msg = useSelector((e) => e.AuthReducer.msg);
  const isLooding = useSelector((e) => e.AuthReducer.isLooding);
  const toast = useToast();

  const comingFrom = location.state?.data || "/";
  function sendSigninRequest() {
    dispatch(SigninReq({ email, password })).then((res) => {
      if (res.type == "SIGNIN_SUCCESS_REQUEST") {
        toast({
          title: "Sign in Successfull!",
          status: "success",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      } else {
        toast({
          title: "Sign in failed! check details and try again. ",
          status: "error",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      }
    });
  }

  useEffect(() => {
    if (isAuth) {
      navigate("/");
      window.location.reload();
    }
  }, [isAuth]);

  return (
    <Box style={{ fontFamily: "sans-serif" }}>
      <FormControl w={["95%", "75%", "65%"]} margin={"auto"}>
        <FormLabel
          color={"gray"}
          fontSize={"14px"}
          fontWeight={600}
          mt={"30px"}
        >
          Email address :
        </FormLabel>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="lg"
          type="email"
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
      </FormControl>
      <Box w={"65%"} margin={"auto"} mt={"20px"}>
        <Button
          onClick={sendSigninRequest}
          w={"100%"}
          bg={"#2d2d2d"}
          color={"white"}
        >
          {isLooding ? <Spinner /> : "SIGN IN"}
        </Button>
      </Box>
      <Text textAlign={"center"} mt={"15px"}>
        Forgot password?
      </Text>
      <Text textAlign={"center"} fontSize={"18px"} mt={"40px"} fontWeight={600}>
        OR SIGN IN WITH...
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
          p={1}
          justifyContent="space-Evenly"
          border={"1px solid gray"}
          w={["36%", "31%", "31%", "31%"]}
        >
          <IoLogoFacebook color="#3b5998" size={"25px"} />
          <Text fontWeight={600}>Facebook</Text>
        </Flex>
      </Flex>
      <Text textAlign={"center"} mt={"18px"}>
        Where has Twitter Gone?
      </Text>
    </Box>
  );
}
