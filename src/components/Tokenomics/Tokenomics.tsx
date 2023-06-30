import {
  Box,
  VStack,
  Center,
  useColorModeValue,
  Stack,
  Text,
  HStack,
  Image,
  SimpleGrid,
  Heading,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import "chart.js/auto";
import { Doughnut, Pie } from "react-chartjs-2";
import { TokenomicsCaraousal } from "./TokenomicsCaraousal";
import { graph, roadBack } from "../../assets";
const data = {
  labels: [
    "Team and Advisor",
    "Marketing",
    "Liquidity provision",
    "Strategic partnership",
    "Community developement",
  ],
  datasets: [
    {
      backgroundColor: ["#AAFF00", "#8F00FF", "	#FFA500", "#39FFFF", "#DB1F48"],
      spacing: 4,
      borderColor: "none",
      borderRadius: 10,
      data: [35, 25, 20, 15, 5],
      name: ["35", "25", "20", "15", "5"],
    },
  ],
};
const options = {
  hoverBorderColor: "white",
  // hoverBorderJoinStyle:"milter",
  plugins: {
    subtitle: { display: true, text: "Custom Chart Title" },
    legend: {
      display: false,
    },
    tooltip: {
      titleFont: {
        size: 25,
      },
      bodyFont: {
        size: 20,
      },
      padding: 10,
      borderWidth: 2,
      borderColor: "white",
      callbacks: {
        afterLabel: function (data: any) {
          let label = data.dataset.data[5] || "";
          if (!label) {
            label += "%";
          }
          return label;
        },
      },
    },
  },
};

export const Tokenomics = (props: any) => {
  //   const ref = useRef();
  return (
    <Box width="full" id={props.id} >
      <Center>
        <Heading
          size={["xl", "2xl", "3xl"]}
          font-family={"Poppins"}
          py={[1, 2, 5]}
          px={3}
          color={useColorModeValue("black", "white")}
          bg="cyan.500"
          borderRadius="lg"
          marginTop={5}
          marginBottom={10}
        >
          Tokenomics
        </Heading>
      </Center>
      <Center>
        <Text
          textAlign="center"
          width={["full", "50%"]}
          fontSize={["sm", "sm", "md", "lg"]}
          fontWeight={500}
          font-family={"Poppins"}
        >
          EBULLS Token is a multi-chain token that is based on four different
          blockchains: Ethereum, Tron, Binance Smart Chain.
        </Text>
      </Center>
      <VStack
        direction={["column", "column"]}
        // height="50%"
        // border="1px solid green"
        justify="space-around"
        // alignItems="center"
      >
        {/* <Box p={5}>
          <SimpleGrid columns={[2, null, 4]} width="100%" margin="auto" gap={2}>
            <Text
              fontSize={["md", "lg"]}
              fontWeight={500}
              font-family={"Poppins"}
              bgColor="orange.400"
              borderRadius={["lg", null, "full"]}
              p={1}
              textAlign="center"
              align="center"
              py={3}
            >
              Token Symbol: EBULLS
            </Text>
            <Text
              fontSize={["md", "lg"]}
              fontWeight={500}
              font-family={"Poppins"}
              bgColor="orange.400"
              borderRadius={["lg", null, "full"]}
              textAlign="center"
              py={3}
            >
              Token Standard: ERC-20, TRC-20, BEP-20
            </Text>
            <Text
              fontSize={["md", "lg"]}
              fontWeight={500}
              font-family={"Poppins"}
              bgColor="orange.400"
              borderRadius={["lg", null, "full"]}
              textAlign="center"
              py={3}
            >
              Total Supply: 1,000,000,000 EBULLS
            </Text>
            <Text
              fontSize={["md", "lg"]}
              fontWeight={500}
              font-family={"Poppins"}
              bgColor="orange.400"
              borderRadius={["lg", null, "full"]}
              textAlign="center"
              py={[7, 4, 3]}
            >
              Decimal Places: 18
            </Text>
          </SimpleGrid>
        </Box> */}

        <Image src={graph}></Image>
        {/* </VStack> */}
        {/* <VStack> */}
        <Text
          fontSize={["2xl", "3xl", "4xl"]}
          fontWeight={500}
          font-family={"Poppins"}
          mt={-10}
        >
          Features
        </Text>
       <Box width={180} >
        <Divider orientation="horizontal" borderWidth="4px" borderColor="seagreen" borderRadius="full"/>
       </Box>
        <TokenomicsCaraousal />
      </VStack>
      
    </Box>
  );
};
