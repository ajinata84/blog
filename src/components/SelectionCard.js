import React from "react";
import { Container, Text, Stack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function SelectionCard({
  id,
  title,
  imgUrl,
  subheading,
  author,
  date,
}) {
  const transition = { transition: { duration: 0.3, type: "linear" } };

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
        <NavLink to={`/${id}`}>
          <Stack
            paddingY={{ base: "0px", md: "0px" }}
            direction={{ base: "row", md: "row" }}
            justifyContent={{ base: "start", md: "start" }}
          >
            <Image className="selection-image" src={imgUrl} />
            <Stack
              direction={"column"}
              justifyContent="center"
              width={"60%"}
              paddingLeft={{ md: "40px" }}
              alignItems={{ base: "start", md: "start" }}
            >
              <Text
                fontSize={{ base: 20, md: 30 }}
                fontWeight={500}
                noOfLines={2}
                textOverflow="ellipsis"
              >
                {title}
              </Text>
              <Text
                className="subheading"
                fontSize={18}
                fontWeight={400}
                textOverflow="ellipsis"
                noOfLines={2}
              >
                {subheading}
              </Text>
              <Text fontSize={12} fontWeight={400} textAlign="start">
                {author}, {date}
              </Text>
            </Stack>
          </Stack>
        </NavLink>
      </Container>
    </motion.div>
  );
}
