import { Box, Text } from "@chakra-ui/react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { AllRoutes } from "./Pages/AllRoutes";

function App() {
  return (
    <Box className="font-face-pt ">
     <AllRoutes />
    </Box>
  );
}

export default App;
