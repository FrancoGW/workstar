"use client";
// import Link from "next/link"
import React, { useState } from "react";
import Logo from "../../../public/assets/logoSFT.png";

import Image from "next/image";
import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
];

export default function Navitaion() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isXIcon, setIsXIcon] = useState(false); // Nuevo estado para alternar entre ícono de hamburguesa y "X"

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsXIcon(!isXIcon); // Cambiar el estado del ícono cuando se abre/cierra el menú
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsXIcon(false); // Cambiar el estado del ícono cuando se cierra el menú
  };

  const navigateTo = (route) => {
    router.push(route);
    closeMenu();
  };

  return (
    <Box
      as="header"
      bg="blue.500"
      py={4}
      px={6}
      display="flex"
      justifyContent="space-between"
      zIndex='99999'
      paddingLeft='10%' paddingRight='10%' 
    >
      <Box>
        <Image src={Logo} width={50} height={50} alt="logo" />
      </Box>
      <Button
        onClick={toggleMenu}
        zIndex="99"
        border="none"
        bg="none"
        display={{ base: "block", md: "none" }}
        aria-label="Toggle Menu"
      >
        {isXIcon ? <CloseIcon boxSize={30} color='#fff' /> : <HamburgerIcon boxSize={30} />}
      </Button>
      <Drawer placement="right" isOpen={isMenuOpen} onClose={closeMenu}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <VStack
              spacing={4}
              align="stretch"
              bg="#3636E8"
              height="100vh"
              display="flex"
              justify='center'
              alignItems='center'
            >
              {links.map(({ label, route }) => (
                <Link key={route} color="#FFF" fontWeight="semi-bold" fontSize='1.7rem'>
                  {label}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
