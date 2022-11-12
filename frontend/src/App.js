import { Box} from "@chakra-ui/react";
import "./App.css";

import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import WomenPage from "./components/WomenPage";


function App() {
  return (
    <>
    <Box className="font-face-pt ">
      <Navbar />
      <WomenPage/>
     <Footer/>
    </Box>
    </>
  );
}

export default App;
