import { Flex, VStack } from "@chakra-ui/react";
import React from "react";
import AuthForm from "../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <>
      <Flex
        minH={"100vh"}
        px={4}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <AuthForm />
      </Flex>
    </>
  );
};

export default AuthPage;
