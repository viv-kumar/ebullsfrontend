import {
  background,
  Badge,
  Box,
  color,
  Heading,
  HStack,
  Tag,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
// import { pointer } from "@testing-library/user-event/dist/types/pointer";
import { motion } from "framer-motion";
import React from "react";
// import { Link ,} from "react-router-dom";
// import { AboutDefi } from "../AboutDefi/AboutDefi";

import { Link, animateScroll as scroll } from "react-scroll";

const MotionText = motion(Text);

export const NewHeroHeading = () => {
  const heading1 = "Decentralization is here".split("");
  const heading2 = "so we are".split("");
  return (
    <VStack pt="58">
      <MotionText
        // textTransform="uppercase"
        fontSize={["4xl", "5xl", "6xl", "7xl", "8xl"]}
        fontWeight={900}
        color="orange.300"
        textAlign="center"
        lineHeight={1}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        Decentralization is here
      </MotionText>
      <MotionText
        // textTransform="uppercase"
        fontSize={["4xl", "5xl", "6xl", "7xl", "8xl"]}
        fontWeight={900}
        textAlign="center"
        lineHeight={0.8}
        // color={useColorModeValue("white","black")}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 1,
          ease: "easeOut",
        }}
      >
        So we are!
      </MotionText>
    </VStack>
  );
};
