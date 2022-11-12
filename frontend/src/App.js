
import { Box} from "@chakra-ui/react";
import "./App.css";

import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./Pages/Footer";
 import MenPage from "./Pages/MenPage";
import { Box, } from "@chakra-ui/react";
import "./App.css";

import { Navbar } from "./components/Navbar/Navbar";
import { AllRoutes } from "./Pages/AllRoutes";




function App() {
  return (
    <>
    <Box className="font-face-pt ">

      <Navbar />
   
     <MenPage/>
     <Footer/>


     <AllRoutes />

    </Box>
    </>
  );
}

export default App;
