import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TopBanner } from "./TopBanner";
import { MiddleNav } from "./MiddleNav";

import { BottomBanner } from "./BottomBanner";
import { Desktop, Mobile, Tablet } from "../../Responsiveness/Responsive";
import { TabNavbar } from "./TabSizeNav/TabNavbar";
import { MobileNavbar } from "./MobileNav/MobileNav";
export const Navbar = () => {
  return (<>
    <Desktop>
      <Box>
      <TopBanner />
      <MiddleNav />
    </Box>
    </Desktop>
    <Tablet >
      <TabNavbar />
    </Tablet>
    <Mobile>
     <MobileNavbar />
    </Mobile>
    </>
  );
};
