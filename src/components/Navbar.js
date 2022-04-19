import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Container,
  Box,
  Stack,
  Heading,
  Flex,
  Spacer,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import ThemeToggleButton from "./ThemeToggleButton";
import { HamburgerIcon } from "@chakra-ui/icons";

const LinkItem = ({ href, target, children }) => {
  const location = useLocation();
  const active = location.pathname === href;
  const inactiveColor = useColorModeValue("gray200", "white.alpha.900");
  return (
    <NavLink to={href}>
      <Heading size="md">
        <Box
          transition="300ms"
          p={2}
          bg={active ? "#F6F6F6" : undefined}
          borderRadius="3px"
          color={active ? "#202023" : inactiveColor}
        >
          <i>{children}</i>
        </Box>
      </Heading>
    </NavLink>
  );
};

export default function Navbar() {
  return (
    <Box
      position={"fixed"}
      as="nav"
      w="100%"
      zIndex={999}
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
    >
      <Container
        display="flex"
        p={2}
        maxW={650}
        wrap="wrap"
        align="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="md" letterSpacing="tighter">
            <NavLink to={""}>
              <i>DJi's Blog</i>
            </NavLink>
          </Heading>
        </Flex>
        <Spacer></Spacer>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Spacer></Spacer>
          <LinkItem href={""}>Home</LinkItem>
        </Stack>
        <Box ml={2}>
          <ThemeToggleButton></ThemeToggleButton>
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    as={IconButton}
                    icon={<HamburgerIcon />}
                    variant="outline"
                    aria-label="Options"
                  />
                  <MenuList>
                    <NavLink to={""}>
                      <MenuItem>Home</MenuItem>
                    </NavLink>
                  </MenuList>
                </>
              )}
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
