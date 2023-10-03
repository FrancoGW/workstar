import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
export default function Footer() {
  return (
    <Flex background="#000000" height='200px'>
      <Flex justifyContent='space-between' align='center' width='100%' flexDir={{base:'column',md:'row'}} paddingLeft="5%" paddingRight='5%' >
        <Heading color='#fff'>SFT DEVELOPMENT</Heading>
        <Text color='#fff'>All right reserverd &copy;</Text>
      </Flex>
    </Flex>
  );
}
