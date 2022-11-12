import { Box} from "@chakra-ui/react";
import "./App.css";

import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./Pages/Footer";
// import WomenPage from "./Pages/WomenPage";
 import MenPage from "./Pages/MenPage";


function App() {
  return (
    <>
    <Box className="font-face-pt ">
      <Navbar />
     {/* <WomenPage/> */}
     <MenPage/>
     <Footer/>
    </Box>
    </>
  );
}

export default App;
