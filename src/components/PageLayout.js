import React from "react";

import Navbar from "./Navbar";

import { AnimatePresence, motion } from "framer-motion";
import { Container, useColorMode, Box } from "@chakra-ui/react";
import { useLocation, Routes } from "react-router-dom";

export default function PageLayout({ children }) {
  const { colorMode } = useColorMode();
  const location = useLocation();
  return (
    <AnimatePresence key={"global"}>
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
        p={4}
        margin={{ base: "0 auto", md: "0 auto" }}
        maxW={{ base: "90vw", md: "800px" }}
        justifyContent="center"
        display="flex"
        flexDirection={"column"}
      >
        <AnimatePresence exitBeforeEnter key={"routes"}>
          {/* ROUTES */}
          <Routes location={location} key={location.pathname}>
            {children}
          </Routes>
        </AnimatePresence>
      </Container>
    </AnimatePresence>
  );
}
