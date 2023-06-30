import { Box, VStack, Image, useColorModeValue } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
// import { BullBearImage,  } from "../../assets";
import VanillaTilt from "vanilla-tilt";
export const NewHeroImage = () => {
  const imageRef = useRef(null);
  const options = {
    speed: 1000,
  };

  useEffect(() => {
    // @ts-ignore
    VanillaTilt.init(imageRef.current, options);
  }, [options]);

  return (
    <VStack w="full" overflow="hidden">
      <Image
        // src={useColorModeValue(BullBearImage, BullBearImage)}
        // ref={imageRef}
        // data-tilt
        // data-tilt-full-page-listening
        // width="full"
        // pt={"4"}
      ></Image>
    </VStack>
  );
};
