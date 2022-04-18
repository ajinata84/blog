import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Container, useColorMode, Box, Center } from "@chakra-ui/react";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";

function App() {
  const { colorMode } = useColorMode();
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Navbar />
        <Box height={"40px"}></Box>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          style={{
            position: "fixed",
            zIndex: -1,
            width: "100vw",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Container
            position={"fixed"}
            zIndex={-1}
            height={"1000vh"}
            maxW={{ base: undefined, md: "70%" }}
            background={colorMode === "light" ? "#F6F6F6" : "#273247"}
          />
        </motion.div>
        <Center>
          <Container
            p={"5px"}
            margin={{ base: "5px", md: "40px" }}
            maxW={{ base: "90vw", md: "60vw" }}
            justifyContent="center"
            display="flex"
            flexDirection={"column"}
            overflowWrap={"break-word"}
          >
            <AnimatePresence exitBeforeEnter>
              <Routes location={location} key={location.pathname}>
                <Route path="" element={<Home />} />
                <Route path="/:id" element={<BlogPage />} />
              </Routes>
            </AnimatePresence>
          </Container>
        </Center>
      </AnimatePresence>
    </>
  );
}

export default App;