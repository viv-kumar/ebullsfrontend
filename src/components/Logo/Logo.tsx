import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  withDefaultSize,
  Text,
} from "@chakra-ui/react";
// import { EbullsLogo } from "../../assets/index";
import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { logo } from "../../assets";

export const Logo = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <HStack mt={2} >
      <Image
        src={logo}
        onClick={scrollToTop}
        cursor="pointer"
        width="40%"
      ></Image>
      <Text
        fontFamily="sans-serif"
        fontSize={["15", "20", "28"]}
        color="orange.400"
        fontWeight={700}
        // width="80%"
      >
        ebulls
      </Text>
    </HStack>
  );
};
