import { NewHeader } from "../../components/NewHeader/NewHeader";
import { Box, VStack } from "@chakra-ui/react";

import { Navbar, Footer, Tokenomics,RoadMap,AboutUs } from "../../components";

import { mainBack } from "../../assets";

export const Home = () => {
  return (
    <VStack w="full">
      <Navbar />
      <NewHeader />
      <AboutUs id="aboutus" />
      <RoadMap id="roadmap" />
      <Tokenomics id="tokeonomics" />
      <Footer />
    </VStack>
  );
};
