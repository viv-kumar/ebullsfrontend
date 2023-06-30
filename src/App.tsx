import { Box, Heading, useColorModeValue, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <Box width="100%" mt={-3} bgColor={useColorModeValue("#ffffe0", "black")}>
      <VStack w="100%">
        <Outlet />
      </VStack>
    </Box>
  );
};
