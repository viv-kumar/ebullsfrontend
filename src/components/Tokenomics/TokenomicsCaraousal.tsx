import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  HStack,
  Image,
  Flex,
  VStack,
  Button,
} from "@chakra-ui/react";
import Slider from "react-slick";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import {
  multichain,
  lowerTransc,
  fastTransc,
  rewardCoin,
  security,
} from "../../assets";
import { animate, motion, AnimatePresence } from "framer-motion";
const MotionImage = motion(Image);
const MotionText = motion(Text);

export const TokenomicsCaraousal = () => {
  const [pointer, setPointer] = useState(0);
  const cards = [
    {
      about: "Multi-Chain Compatibility",
      desc: "The EBULLS Token is based on four different blockchain networks, namely Ethereum, Tron, Binance Smart Chain.This allows users to conduct transactions across multiple blockchain networks, providing them with flexibility and scalability.",
      image: multichain,
    },
    {
      about: "Low Transaction Fees",
      desc: "The EBULLS Token is designed to have low transaction fees, making it ideal for users who conduct high-frequency transactions. The fees for transactions on the Ethereum network will be determined by the gas price, while the fees for transactions on Tron, Binance Smart Chain will be fixed.",
      image: lowerTransc,
    },
    {
      about: "Fast Transaction Times",
      desc: "Transactions on the EBULLS Token will be processed quickly, allowing users to conduct transactions in real-time. Transactions on the Ethereum network may take longer to process due to network congestion, while transactions on Tron, Binance Smart Chain will be processed quickly.",
      image: fastTransc,
    },
    {
      about: "Staking and Rewards",
      desc: "Users will be able to stake their EBULLS Tokens and earn rewards for doing so. The rewards will be paid in EBULLS Tokens, providing users with an additional source of income.",
      image: rewardCoin,
    },
    {
      about: "Governance",
      desc: "EBULLS Token holders will have the ability to participate in the governance of the platform. They will be able to propose and vote on changes to the platform, providing them with a say in the future development of the platform.",
      image: security,
    },
  ];
  return (
    <Box width={["full", "55%"]} boxShadow="lg" p={5} borderRadius="lg">
      <Stack
        direction={["column", "row"]}
        width="100%"
        height={[500, 300, 250, 230]}
      >
        <Box
          key={cards[pointer].image}
          width={["80%", 40, 40, 40]}
          margin="auto"
        >
          <AnimatePresence>
            <MotionImage
              key={cards[pointer].image}
              src={cards[pointer].image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            ></MotionImage>
          </AnimatePresence>
        </Box>

        <Box
          key={cards[pointer].desc}
          width={["full", 500, 500, 500]}
          py={5}
          margin="auto"
        >
          <AnimatePresence>
            <MotionText
              key={cards[pointer].about}
              fontWeight={500}
              fontSize={["xl", "2xl", "3xl"]}
              textAlign={["center", "justify"]}
              color="blue.500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              {cards[pointer].about}
            </MotionText>
          </AnimatePresence>
          <AnimatePresence>
            <MotionText
              key={cards[pointer].desc}
              width="full"
              textAlign={["center", "justify"]}
              fontWeight={500}
              fontSize={["sm", "sm", "md", "lg"]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              exit={{ opacity: 0 }}
            >
              {cards[pointer].desc}
            </MotionText>
          </AnimatePresence>
        </Box>
      </Stack>

      <Flex
        justifyContent="space-between"
        width="100%"
        margin="auto"
        align="center"
      >
        <Button
          height={10}
          width={10}
          bgColor="gray.600"
          //   py={3}
          borderRadius="full"
          border="1px solid white"
          cursor="pointer"
          isDisabled={pointer == 0 ? true : false}
          onClick={() => {
            setPointer(pointer - 1);
          }}
        >
          <Text>
            {" "}
            <BiLeftArrowAlt fontSize="2rem" />
          </Text>
        </Button>
        <HStack height={5} width="100%" px={1} spacing={0}>
          <Text
            height={1}
            width="20%"
            // borderRadius="full"
            bgColor={pointer >= 0 ? "orange.300" : "gray.600"}
          ></Text>
          <Text
            height={1}
            width="20%"
            bgColor={pointer >= 1 ? "orange.300" : "gray.600"}
            // borderRadius="full"
          ></Text>
          <Text
            height={1}
            width="20%"
            bgColor={pointer >= 2 ? "orange.300" : "gray.600"}
            // borderRadius="full"
          ></Text>
          <Text
            height={1}
            width="20%"
            bgColor={pointer >= 3 ? "orange.300" : "gray.600"}
            // borderRadius="full"
          ></Text>
          <Text
            height={1}
            width="20%"
            bgColor={pointer >= 4 ? "orange.300" : "gray.600"}
            // borderRadius="full"
          ></Text>
        </HStack>

        <Button
          height={10}
          width={10}
          bgColor="gray.600"
          py={3}
          borderRadius="full"
          border="1px solid white"
          cursor="pointer"
          onClick={() => {
            setPointer(pointer + 1);
          }}
          isDisabled={pointer >= 4 ? true : false}
        >
          <Text>
            {" "}
            <BiRightArrowAlt fontSize="2rem" />
          </Text>
        </Button>
      </Flex>
    </Box>
  );
};
