import React, { useEffect, useRef, useState } from "react";
import {
  Heading,
  Image,
  VStack,
  Text,
  HStack,
  IconButton,
  Box,
  useDimensions,
  Flex,
  useColorModeValue,
  Stack,
  Divider,
  Hide,
  Show,
} from "@chakra-ui/react";
import { animate, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FaArrowCircleDown } from "react-icons/fa";
// import { TryVideo } from "../TryVideo/TryVideo";
import {
  newRoadMAP,
  newRoadMapSmall,
  roadBack,
  roadBlock,
  roadMapBack,
  roadMapBot,
  roadMapExc,
  roadMapMake,
  roadmap,
} from "../../assets";
import { video } from "../../assets";
const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionStack = motion(Stack);
export const RoadMap = (props: any) => {
  const imageRef = useRef(null);
  const imageDimensions = useDimensions(imageRef);
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <VStack
      id={props.id}
      width="100%"
      h="100%"
      // h="100vh"
      bgImage={useColorModeValue("none", roadMapBack )}
      bgRepeat="no-repeat"
      // bgPosition="bottom"
      bgPos="top"
      position="relative"
      // border="1px solid red"
      // marginTop={-5}
      // bgColor="blackAlpha.400"
      // bgAttachment="fixed"
    >
      <Heading
        ref={ref}
        size={["xl", "2xl", "3xl"]}
        // fontFamily="poppins"
        font-family={"Poppins"}
        py={[1, 2, 6]}
        px={3}
        color={useColorModeValue("black", "white")}
        // width="100%"
        bg="cyan.500"
        borderRadius="lg"
        marginBottom={14}
        marginTop={5}
      >
        Mind Map
      </Heading>
      {/* <Divider orientation="horizontal" width="50%" /> */}
      {/* 
      <MotionStack
        direction="row"
        width={["full", "full", "full", "50%"]}
        margin="auto"
        align="center"
        borderRadius="lg"
        px={2}
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
      >
        <MotionBox
          // height={300}
          initial={{
            // y: 100,
            opacity: 0,
            height: 0,
          }}
          whileInView={{
            // y: 0,
            opacity: 1,
            height: 300,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          <Divider
            orientation="vertical"
            borderColor="cyan.300"
            borderWidth="5px"
            variant="dashed"
            // height="100%"
          />
        </MotionBox>
        <Image src={roadBlock} boxSize={[200, 300]}></Image>
        <Box width="100%">
          <Text
            textAlign="center"
            fontSize={["2xl", "3xl", "4xl"]}
            color="cyan.300"
          >
            Q1 2023
          </Text>
          <Text textAlign="center">
            Launch of the EBULLS white paper Development of the EBULLS
            blockchain network
          </Text>
        </Box>
      </MotionStack>
      <MotionStack
        direction="row"
        // width="50%"
        width={["full", "full", "full", "50%"]}
        margin="auto"
        align="center"
        px={2}
        borderRadius="lg"
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
        // px={[0,10]}
        // border="1px solid red"
      >
        <MotionBox
          initial={{
            opacity: 0,
            height: 0,
          }}
          whileInView={{
            opacity: 1,
            height: 300,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          <Divider
            orientation="vertical"
            borderColor="cyan.300"
            borderWidth="5px"
            variant="dashed"
            mr={5}
            // height="100%"
          />
        </MotionBox>
        <Image src={roadMapBot} boxSize={[200, 250]}></Image>
        <Box width="100%">
          <Text
            textAlign="center"
            fontSize={["2xl", "3xl", "4xl"]}
            color="cyan.300"
          >
            Q2 2023
          </Text>
          <Text textAlign="center">
            Launch of the EBULLS exchange Integration of the arbitrage trading
            bot into the platform
          </Text>
        </Box>
      </MotionStack>
      <MotionStack
        direction="row"
        // width="50%"
        width={["full", "full", "full", "50%"]}
        margin="auto"
        align="center"
        borderRadius="lg"
        px={2}
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
      >
        <MotionBox
          // height={300}
          initial={{
            // y: 100,
            opacity: 0,
            height: 0,
          }}
          whileInView={{
            // y: 0,
            opacity: 1,
            height: 300,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          <Divider
            orientation="vertical"
            borderColor="cyan.300"
            borderWidth="5px"
            variant="dashed"
            // height="100%"
          />
        </MotionBox>
        <Image src={roadMapExc} boxSize={[200, 300]}></Image>
        <Box width="100%">
          <Text
            textAlign="center"
            fontSize={["2xl", "3xl", "4xl"]}
            color="cyan.300"
          >
            Q3 2023
          </Text>
          <Text textAlign="center">
            Launch of the EBULLS token Listing of the EBULLS token on major
            exchanges.
          </Text>
        </Box>
      </MotionStack>
      <MotionStack
        direction="row"
        // width="50%"
        width={["full", "full", "full", "50%"]}
        margin="auto"
        align="center"
        borderRadius="lg"
        px={2}
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
      >
        <MotionBox
          initial={{
            opacity: 0,
            height: 0,
            y: 0,
          }}
          whileInView={{
            opacity: 1,
            height: 300,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          // border="1px solid red"
        >
          <Divider
            orientation="vertical"
            borderColor="cyan.300"
            borderWidth="5px"
            variant="dashed"
            // height="100%"
          />
        </MotionBox>

        <Image src={roadMapMake} boxSize={[200, 300]}></Image>
        <Box width="100%">
          <Text
            textAlign="center"
            fontSize={["2xl", "3xl", "4xl"]}
            color="cyan.300"
          >
            Q4 2023
          </Text>
          <Text textAlign="center">
            Continued development of the EBULLS platform Introduction of new
            features and improvements Conclusion.
          </Text>
        </Box>
      </MotionStack>
      <MotionText
        initial={{
          y: 0,
          opacity: 0,
        }}
        whileInView={{
          y: 5,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
          delay: 1,
        }}
        width={["full", "51%"]}
        // px={[0,"24.5%"]}
        fontSize={[26, 30, 40]}
        color="orange.200"
        textAlign="right"
        // border="1px solid red"
      >
        <FaArrowCircleDown />
      </MotionText> */}
      <Hide below="md">
        <Image src={newRoadMAP} width="100%"></Image>
      </Hide>
      <Show below="md">
        <Image src={newRoadMapSmall}></Image>
      </Show>
    </VStack>
  );
};
