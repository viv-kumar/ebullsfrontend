import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  useColorMode,
  useColorModeValue,
  VStack,
  useDisclosure,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Badge,
} from "@chakra-ui/react";
import { Heading, Hide, HStack, Show, Spacer, Image } from "@chakra-ui/react";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
// import { Logo } from "../../assets";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { NavMenu } from "./NavMenu";
import { navMenu } from "./NavMenuItems";
import { useNavigate } from "react-router-dom";
// import { RoadMap } from "../RoadMap/RoadMap";
import { Link, animateScroll as scroll } from "react-scroll";
import { Logo } from "../Logo/Logo";

const MotionHStack = motion(HStack);

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrollYvalue, setScrollYValue] = useState(0);
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  // console.log(isOpen);

  useEffect(() => {
    const updateSrollYPosition = () => {
      setScrollYValue(window.scrollY);
    };
    window.addEventListener("scroll", updateSrollYPosition);

    return () => window.removeEventListener("scroll", updateSrollYPosition);
  });

  useEffect(() => {});
  return (
    <MotionHStack
      w={["100%", "full", "full", "full"]}
      position="fixed"
      boxShadow={scrollYvalue > 10 ? "base" : "none"}
      zIndex={1}
      backdropFilter={scrollYvalue > 10 && "blur(7px)"}
      px={[2, 3, 4]}
      h={100}
      align="center"
      justify="center"
      userSelect="none"
    
    >
      <Logo />
      <Spacer />
      <Hide below="md">
        <NavMenu></NavMenu>
      </Hide>
      <ColorModeSwitcher />
      <Show below="md">
        <Menu>
          <MenuButton>
            <HamburgerIcon fontSize="3xl"></HamburgerIcon>
          </MenuButton>
          <MenuList py={3}>
            {navMenu.map((menu, key) => {
              return <MenuItem key={key}>{menu.name}</MenuItem>;
            })}
          </MenuList>
        </Menu>
      </Show>
    </MotionHStack>
  );
};
