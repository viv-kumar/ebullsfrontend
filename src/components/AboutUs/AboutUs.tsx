import {
  Heading,
  VStack,
  Divider,
  Stack,
  Text,
  Box,
  Center,
  Image,
  SimpleGrid,
  useColorModeValue,
  // Divider
} from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";
import { aboutBack, aboutTheme, headerBack, roadMapBack } from "../../assets";
import VanillaTilt from "vanilla-tilt";
import { useInView } from "framer-motion";
import { BiCoinStack, BiMask } from "react-icons/bi";
import { MdOutlineCurrencyExchange, MdOutlineWebhook } from "react-icons/md";
import { motion } from "framer-motion";

import { aboutVid } from "../../assets";
import { TryVideo } from "../TryVideo/TryVideo";
const MotionVStack = motion(VStack);

export const AboutUs = (props: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const imageRef = useRef(null);
  const options = {
    speed: 1000,
  };
  useEffect(() => {
    // @ts-ignore
    VanillaTilt.init(imageRef.current, options);
  }, [options]);

  return (
    <Stack
      id={props.id}
      w="full"
      direction={["column", "column", "column", "row", "row"]}
      align="top"
      justifyContent="space-around"
      p={5}
      h={["full", "full", "full", "full", "100vh"]}
      // background="transparent"
      bgImage={useColorModeValue(aboutBack, "none")}
      // bgPos="center"
      position="relative"
    >
      <Box width={["100%", "full", "full", "full", 600]} marginTop={5}>
        <Center>
          <Image
            src={aboutTheme}
            ref={imageRef}
            data-tilt
            data-tilt-max="20"
            data-tilt-perspective="600"
            // boxSize={[450,600,500,550]}
          ></Image>
        </Center>
      </Box>
      <Box width={["100%", "full", "full", "full", 500]} py={[2, 2, 2, 14]}>
        <VStack>
          <Text
            width="100%"
            font-family={"Poppins"}
            fontSize={["4xl", "5xl", "6xl"]}
            fontWeight={500}
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(-100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              // textAlignLast:"justify"
            }}
            color={useColorModeValue("black", "white")}
            textAlign={["center", "center", "center", "left"]}
          >
            About us
          </Text>
          <Divider borderColor="gray.300" borderWidth="3px" />
          <Text
            // textAlign="center"

            font-family="Poppins"
            fontSize={["sm", "sm", "md", "lg"]}
            // fontWeight={500}
            textAlign={["justify", "center", "center", "justify"]}
            letterSpacing={0.1}
            whiteSpace="break-spaces"
            // color={useColorModeValue("blackAlpha.800", "gray.100")}
            color={useColorModeValue("black", "white")}
          >
            EBULLS is a blockchain-based platform that aims to provide users
            with a flexible and scalable ecosystem for conducting transactions
            on multiple blockchain networks. Our mission is to make it easier
            for individuals and businesses to access and use blockchain
            technology by providing a simple and user-friendly platform that
            enables them to conduct transactions with ease.
          </Text>
          <Divider variant="thick" colorScheme="red.600" />
          <SimpleGrid
            columns={[2, null, 4]}
            spacing="20px"
            width="100%"
            py={15}
          >
            <MotionVStack
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              bgColor="orange.300"
              rounded="lg"
              p={2}
              boxShadow="dark-lg"
            >
              <BiCoinStack fontSize={25} />
              <Text>Blockchain</Text>
            </MotionVStack>
            <MotionVStack
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              bgColor="orange.300"
              rounded="lg"
              p={2}
              boxShadow="dark-lg"
            >
              <BiMask fontSize={25} />
              <Text>Metaverse</Text>
            </MotionVStack>
            <MotionVStack
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              bgColor="orange.300"
              rounded="lg"
              p={2}
              boxShadow="dark-lg"
            >
              <MdOutlineCurrencyExchange fontSize={25} />
              <Text>DEFI</Text>
            </MotionVStack>
            <MotionVStack
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              bgColor="orange.300"
              rounded="lg"
              p={2}
              boxShadow="dark-lg"
            >
              <MdOutlineWebhook fontSize={25} />
              <Text>WEB3.0</Text>
            </MotionVStack>
          </SimpleGrid>
        </VStack>
      </Box>
    </Stack>
  );
};
