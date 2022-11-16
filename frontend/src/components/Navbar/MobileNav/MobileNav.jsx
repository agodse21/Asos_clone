import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import { TabMiddleNav } from "./TabMiddleNav";
import { MobileMiddleNav } from "./MobileMiddleNav";
export const MobileNavbar = () => {
  return (
    <Box>
      <MobileMiddleNav />
    </Box>
  );
};
