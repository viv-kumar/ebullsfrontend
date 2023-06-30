import React from "react";
import { video } from "../../assets";
// import { video } from '../../assets';
// import ReactPlayer from "react-player";
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
} from "@chakra-ui/react";

export const TryVideo = (props:any) => {
  return (
    <Stack width="full" background="transparent" >
      <video src={props.video} autoPlay loop muted width="full"  />
    </Stack>
  );
};
