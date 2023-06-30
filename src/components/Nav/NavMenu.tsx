import { ImUsers, ImHome } from "react-icons/im";
import { TbChartDonutFilled } from "react-icons/tb";
import {
  HStack,
  VStack,
  Badge,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  Stack,
  IconButton,
  useColorModePreference,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  FaTwitter,
  FaInstagram,
  FaRoute,
  FaPeopleArrows,
} from "react-icons/fa";

import { navMenu } from "./NavMenuItems";
import { Link, animateScroll as scroll } from "react-scroll";
import { color } from "framer-motion";
import { motion } from "framer-motion";
const MotionBadge = motion(Badge);

export const NavMenu = () => {
  const logoArr = [<FaTwitter fontSize="0.9rem" />, <FaInstagram />];
  const scrollLink = ["home", "aboutus", "roadmap", "tokeonomics"];
  const menuArr = [
    <ImHome fontSize="0.9em" />,
    <ImUsers />,
    <FaRoute />,
    <TbChartDonutFilled />,
  ];
  const linksSocialHandle = [
    "https://twitter.com/0xebulls?t=9UE4DenXOi4f6rIKg2SMYA&s=08",
    "https://www.instagram.com/0xebulls/",
  ];
  const color = useColorModeValue("blackAlpha.900", "gray.100");
  return (
    <VStack w="full" align="center" justify="center" alignSelf="center">
      <HStack
        fontSize="small"
        fontWeight={400}
        justifyContent="space-around"
        spacing={[0, 0, 0, 0]}
        align="center"
        
      
      >
        {navMenu.map((menu, key) => {
          return key != 4 ? (
            <VStack key={key}>
              <MotionBadge
                py={1}
                px={3}
                borderRadius="md"
                cursor="pointer"
                color={color}
                textAlign="center"
                variant="none"
                fontSize={14}
                fontWeight={500}
                whileHover={{ scale: 1.1 }}
              >
                <Link
                  to={scrollLink[key]}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeStyle={{ color: "#A8E10C" }}
                  font-family={"Poppins"}
                >
                  {menu.name}
                  <IconButton
                    aria-label="home"
                    icon={menuArr[key]}
                    variant="none"
                    size="xs"
                  />
                </Link>
              </MotionBadge>
            </VStack>
          ) : (
            <VStack key={key}>
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <MotionBadge
                    py={1}
                    px={3}
                    borderRadius="md"
                    whileHover={{ scale: 1.1 }}
                    cursor="pointer"
                    color={color}
                    variant="none"
                    fontSize={14}
                    fontWeight={500}
                    // fontFamily={"poppins"}
                    font-family={"Poppins"}
                  >
                    {menu.name}
                    <IconButton
                      aria-label="COMMUNITY"
                      variant="none"
                      size="xs"
                      icon={<FaPeopleArrows />}
                    />
                  </MotionBadge>
                </PopoverTrigger>
                {menu.children && (
                  <PopoverContent
                    border={0}
                    boxShadow={"3xl"}
                    p={4}
                    rounded={"xl"}
                    maxW={60}
                    // bgColor="white"
                  >
                    <Stack>
                      {menu.children.map((child, key) => (
                        <Text
                          key={key}
                          _hover={{ color: "green.300" }}
                          fontSize={16}
                          cursor="pointer"
                        >
                          {child.label}
                          <IconButton
                            as="a"
                            href={linksSocialHandle[key]}
                            aria-label={child.label}
                            icon={logoArr[key]}
                            ml={-2}
                            variant="none"
                          />
                        </Text>
                      ))}
                    </Stack>
                  </PopoverContent>
                )}
              </Popover>
            </VStack>
          );
        })}
      </HStack>
    </VStack>
  );
};
