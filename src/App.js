import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Container, useColorMode, Box } from "@chakra-ui/react";
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
            maxW={{ base: undefined, md: "950px" }}
            background={colorMode === "light" ? "#F6F6F6" : "#273247"}
          />
        </motion.div>
        <Container
          p={"5px"}
          margin={{ base: "0 auto", md: "0 auto" }}
          maxW={{ base: "90vw", md: "800px" }}
          justifyContent="center"
          display="flex"
          flexDirection={"column"}
        >
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="" element={<Home />} />
              <Route path="/:id" element={<BlogPage />} />
            </Routes>
          </AnimatePresence>
        </Container>
      </AnimatePresence>
    </>
  );
}

export default App;
