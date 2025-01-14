import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
  const [isLogIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <VStack p={5} border={"1px solid gray"}>
        <Box maxW={400} w={"fit-content"}>
          <Text textAlign={"center"}> {isLogIn ? "Sign In to your account" : "Sign up for an account"} </Text>
          {isLogIn ? <Login /> : <SignUp />}
          <Flex mt={5} justifyContent={"space-between"} alignItems={"center"}>
            <Box w={"41%"} borderBottom={"1px"} />
            OR
            <Box w={"41%"} borderBottom={"1px"} />
          </Flex>
          <GoogleAuth />
        </Box>
        <Flex>
          {isLogIn ? (
            <Text mr={1}>Already have an account?</Text>
          ) : (
            <Text mr={1}>Don't have an account yet?</Text>
          )}
          <Box cursor={"pointer"} onClick={() =>setIsLoggedIn(!isLogIn)} color={"blue"}>
            {isLogIn ? <Text>Sign Up</Text> : <Text>Sign In</Text>}
          </Box>
        </Flex>
      </VStack>
    </>
  );
};

export default AuthForm;
