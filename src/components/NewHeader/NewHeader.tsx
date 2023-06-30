import React, { useEffect, useRef, useState } from "react";
import {
  VStack,
  Stack,
  Box,
  Text,
  Image,
  Mark,
  Flex,
  useColorModeValue,
  Heading,
  Button,
  HStack,
  useDisclosure,
  Badge,
  Hide,
  Divider,
  background,
  Center,
  useColorMode,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { NewHeroHeading } from "./NewHeroHeading";
import { NewHeroImage } from "./NewHeroImage";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "framer-motion";
import { TryVideo } from "../TryVideo/TryVideo";
import {
  headerBack,
  headerImg,
  test,
  headerBlock,
  headerGrad,
  headerBlock2,
  popupImage
} from "../../assets";
import { animateScroll as scroll } from "react-scroll";
import { once } from "events";
// import { Button } from "react-scroll";
const MotionText = motion(Box);
const MotionImage = motion(Image);
const MotionImage2 = motion(Image);
const MotionButton = motion(Button);
export const NewHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
   useEffect(() => {
       onOpen()
      //  console.log(isOpen)
   }, []);
 console.log(isOpen);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  var idd: any;

  return (
    <>
      <VStack
        bgImage={useColorModeValue(headerGrad, headerBack)}
        // py={[16,20,20,16]}
        w="full"
        bgRepeat="no-repeat"
        bgSize="full"
        bgPos="center"
        position="relative"
        userSelect="none"
      >
        <Stack
          w="full"
          direction={["column", "column", "column", "row"]}
          justify="space-around"
          h={["full", "full", "full", "100vh"]}
          align="center"
          marginTop={[12, 11, 10]}
          p={10}
        >
          <Box width={["full", "full", "full", "55%"]}>
            <Stack width="full" spacing={-2}>
              <Text
                font-family={"Poppins"}
                fontSize={["2xl", "3xl", "4xl", "5xl", "6xl"]}
                fontWeight={500}
                textAlign={["center", "center", "center", "left"]}
                color={useColorModeValue("black", "white")}
                lineHeight={1.2}
                width="full"
              >
                Implementing Blockchain
              </Text>
              <Text
                font-family={"Poppins"}
                fontSize={["2xl", "3xl", "4xl", "5xl", "6xl"]}
                fontWeight={500}
                color="orange.300"
                textAlign={["center", "center", "center", "left"]}
                width="full"
              >
                for your Buisnesses
              </Text>
              <Text
                color={useColorModeValue("black", "white")}
                textAlign={["center", "center", "center", "justify"]}
                fontSize={["sm", "sm", "md", "lg"]}
                // fontWeight={500}
                font-family={"Poppins"}
                py={5}
                width="full"
              >
                EBULLS is a cryptocurrency trading platform designed to provide
                users with an easy-to-use and secure platform to trade various
                digital assets. The platform is built on top of a blockchain
                network, providing users with an additional layer of security
                and transparency.
              </Text>
              <HStack
                justifyContent={["center", "center", "center", "left"]}
                width={["full", "full", "full", 300]}
              >
                <MotionButton
                  bgGradient={useColorModeValue(
                    "linear(to-r,white,orange.200)",
                    "linear(to-r,blue.200,blue.700)"
                  )}
                  _hover={{ bg: "purple.300", color: "white" }}
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.08 }}
                >
                  Learn More
                </MotionButton>
                <MotionButton
                  color={useColorModeValue("orange.500", "blue.100")}
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.08 }}
                >
                  How it works
                </MotionButton>
              </HStack>
            </Stack>
          </Box>
          <Box width={["full", "full", "full", "55%"]}>
            <Center position="relative" overflow="hidden">
              <MotionImage
                src={headerBlock}
                animate={{ rotateZ: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                boxSize={[250, 300, 325, 350, 485]}
                // zIndex={2}
                // ml={[2,2,2,0]}
              ></MotionImage>
              <MotionImage2
                src={headerBlock2}
                animate={{ rotateZ: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                boxSize={[150, 200, 225, 250, 300]}
                position="absolute"
                // top={16}
                // zIndex={2}
              ></MotionImage2>
            </Center>
          </Box>
        </Stack>
        <Stack
          h="10px"
          borderBlockStartStyle="none"
          width="full"
          position="absolute"
          bottom={-2}
          backdropFilter="blur(10px)"
          // boxShadow="dark-lg"
          borderRadius="full"
          bgColor={useColorModeValue("#ffffe0", "none")}
        ></Stack>
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose} isCentered >
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <ModalContent px={[5,5,5,0]} bg="none">
          <Image src={popupImage}></Image>
        </ModalContent>
      </Modal>
    </>
  );
};
