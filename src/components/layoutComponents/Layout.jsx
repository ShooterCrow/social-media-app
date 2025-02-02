import { Box, calc, Flex } from "@chakra-ui/react";
import React from "react";
import BottomBar from "./BottomBar";
import { useLocation } from "react-router-dom";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <>
      <Flex w={"full"} display={{ base: "flex", md: "none", }} h={"100vh"} alignItems={"center"} direction={"column"} >
        {/* Top Side */}
        <Box flex={1}>{children}</Box>
        {/* Bottom Bar */}
        {pathname === "/auth" ? null : (<Box> <BottomBar /> </Box>)}
      </Flex>

      {/* Desktop display */}
      <Flex display={{ base: "none", md: "flex", }}>
        {/* SideBar */}
        {pathname === "/auth" ? null : (<Box w={"250px"} maxW={"25%"}> <SideBar /> </Box>)}
        {/* Main Content Side */}
        <Box flex={1}>{children}</Box>
      </Flex>
    </>
  );
};

export default Layout;
