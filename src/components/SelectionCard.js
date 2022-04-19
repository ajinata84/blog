import React from "react";
import {
  Container,
  Box,
  Text,
  Stack,
  Heading,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function SelectionCard({ id }) {
  const { colorMode } = useColorMode();

  const transition = { transition: { duration: 0.3, type: "linear" } };

  const bgColor = colorMode === "light" ? "white" : "#1A202C";

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        ...transition,
      }}
      exit={{ y: 80, opacity: 0, ...transition }}
    >
      <Container
        className="selection-card"
        marginY={"10px"}
        borderRadius={{ base: "0px", md: "3px" }}
        margin={"20px auto"}
        maxW="100%"
        bg={{ base: undefined, md: undefined }}
      >
        <NavLink to={`/1`}>
          <Stack
            paddingY={{ base: "0px", md: "0px" }}
            direction={{ base: "row", md: "row" }}
            justifyContent={{ base: "start", md: "start" }}
          >
            <Image
              className="selection-image"
              src="https://cdn-image.hipwee.com/wp-content/uploads/2015/06/228140528_Soeharto-smoking-cigar-at-home.jpg"
            />
            <Stack
              direction={"column"}
              justifyContent="center"
              width={"100%"}
              paddingLeft={{ md: "40px" }}
              alignItems={{ base: "center", md: "start" }}
            >
              <Text fontSize={{ base: 20, md: 30 }} fontWeight={500}>
                Afakh Btul??
              </Text>
              <Text
                className="subheading"
                fontSize={18}
                fontWeight={400}
                textOverflow="ellipsis"
                noOfLines={2}
              >
                Kalau Soeharto itu adalah presiden yang sangat baik
              </Text>
              <Text fontSize={12} fontWeight={400}>
                Ajinata, 2020/10/19
              </Text>
            </Stack>
          </Stack>
        </NavLink>
      </Container>
    </motion.div>
  );
}
