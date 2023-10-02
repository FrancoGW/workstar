import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
export default function Footer() {
  return (
    <Flex background="#000000" >
      <Flex padding='5rem' justifyContent='space-between' width='100%'>
        <Heading color='#fff'>SFT DEVELOPMENT</Heading>
        <Text color='#fff'>All right reserverd &copy;</Text>
      </Flex>
    </Flex>
  );
}
