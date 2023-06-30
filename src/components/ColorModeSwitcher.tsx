import * as React from "react";
import {
  useColorMode,
  useColorModeValue,
  
  Center,
  Icon,
  ColorModeScriptProps,
  Stack,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useState } from "react";

const MotionCenter = motion(Center);

export const ColorModeSwitcher = (props: ColorModeScriptProps) => {
  const { toggleColorMode } = useColorMode();
  const [toggle, setToggle] = useState(false);

  const spring = {
    type: "spring",
    stiffness: 900,
    damping: 20,
  };

  const IconStyle = {
    bgColor: useColorModeValue("black", "white"),
    borderRadius: "full",
  };

  return (
    <Stack
      p={2}
      cursor="pointer"
      onClick={() => {
        setToggle(!toggle);
        toggleColorMode();
      }}
      borderRadius="full"
      bgColor={useColorModeValue("orange.500", "gray.500")}
      direction={toggle ? "row" : "row-reverse"}
      w={[10,8,12]}
      // h={[5,8,12]}
    >
      <MotionCenter transition={spring} layout>
        <Icon
          as={useColorModeValue(SunIcon, MoonIcon)}
          color={useColorModeValue("white", "black")}
        ></Icon>
      </MotionCenter>
    </Stack>
  );
};
