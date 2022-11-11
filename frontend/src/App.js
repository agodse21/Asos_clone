import { Box, } from "@chakra-ui/react";
import "./App.css";

import { Navbar } from "./components/Navbar/Navbar";
import { AllRoutes } from "./Pages/AllRoutes";
import All_Route from "./Pages/All_Route";


function App() {
  return (
    <Box className="font-face-pt ">

     <AllRoutes />

     <All_Route/>

    </Box>
  );
}

export default App;
