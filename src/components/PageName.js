import { motion } from "framer-motion";
import { Box, Stack, Container } from "@chakra-ui/react";

import React from "react";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export default function PageName() {
  return (
    <Container
      my="23px"
      flex={1}
      maxW="100%"
      flexDirection={"row"}
      justifyContent={"flex-start"}
      alignItems="start"
    >
      <Stack direction={{ base: "column", md: "row" }}>
        <Box maxHeight={{ base: "100px", md: "130px" }} overflow="hidden">
          <motion.span
            className="sitename first"
            initial={{ y: 0 }}
            animate={{
              y: 0,
              transition: {
                delayChildren: 0.6,
                staggerChildren: 0.04,
                staggerDirection: 1,
              },
            }}
            exit={{ y: 0 }}
          >
            <motion.span
              className="sitename"
              initial={{ y: 100 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, ...transition, delay: 0.6 },
              }}
              exit={{ y: 100 }}
            >
              D
            </motion.span>
            <motion.span
              className="sitename"
              initial={{ y: 100 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, ...transition, delay: 0.45 },
              }}
              exit={{ y: 100 }}
            >
              J
            </motion.span>
            <motion.span
              className="sitename"
              initial={{ y: 100 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, ...transition, delay: 0.3 },
              }}
              exit={{ y: 100 }}
            >
              i
            </motion.span>
            <motion.span
              className="sitename"
              initial={{ y: 100 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, ...transition, delay: 0.15 },
              }}
              exit={{ y: 100 }}
            >
              '
            </motion.span>
            <motion.span
              className="sitename"
              initial={{ y: 100 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, ...transition },
              }}
              exit={{ y: 100 }}
            >
              s
            </motion.span>
          </motion.span>
        </Box>
        <Box maxHeight={{ base: "100px", md: "130px" }} overflow="hidden">
          <motion.span className="sitename last">
            <motion.span
              className="sitename"
              initial={{ y: 100 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, ...transition },
              }}
              exit={{ y: 100 }}
            >
              B
            </motion.span>
            <motion.span
              className="sitename"
              initial={{ y: 100 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, ...transition, delay: 0.1 },
              }}
              exit={{ y: 100 }}
            >
              l
            </motion.span>
            <motion.span
              className="sitename"
              initial={{ y: 100 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, ...transition, delay: 0.2 },
              }}
              exit={{ y: 100 }}
            >
              o
            </motion.span>
            <motion.span
              className="sitename"
              initial={{ y: 100 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, ...transition, delay: 0.3 },
              }}
              exit={{ y: 100 }}
            >
              g
            </motion.span>
          </motion.span>
        </Box>
      </Stack>
    </Container>
  );
}
