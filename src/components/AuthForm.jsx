import { Box, Button, Flex, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AuthForm = ({
  plTxt1 = "Email Address",
  plTxt2 = "Password",
  plTxt3 = "Confirm Password",
}) => {
  const [isLogIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    email:null,
    password: null,
    confirmPassword: null
  })
  const controlAuth = () => {
    if (isLogIn) {
        if (inputs.email && inputs.password) {
            navigate("/")
        } else {
            alert("Complete all fields")
            return
        }
    } else {
        if (inputs.email && inputs.password && inputs.confirmPassword) {
            navigate("/")
        } else {
            alert("Complete all fields")
            return
        }
    }
  }
  return (
    <>
      <VStack p={5} border={"1px solid gray"}>
        <Box maxW={400} w={"fit-content"}>
          <Text textAlign={"center"}> {isLogIn ? "Sign In to your account" : "Sign up for an account"} </Text>
          <Input val={inputs.email} onChange={(e) => setInputs({...inputs, email:e.target.value})} type="email" my={3} placeholder={plTxt1} />
          <Input val={inputs.password} onChange={(e) => setInputs({...inputs, password:e.target.value})}  type="password" mb={3} placeholder={plTxt2} />
          {!isLogIn ? <Input val={inputs.confirmPassword} onChange={(e) => setInputs({...inputs, confirmPassword:e.target.value})}  placeholder={plTxt3} /> : null}
          <Button onClick={controlAuth} mt={3} w={"full"}>
            {isLogIn ? "Sign In" : "Sign Up"}
          </Button>
          <Flex mt={5} justifyContent={"space-between"} alignItems={"center"}>
            <Box w={"41%"} borderBottom={"1px"} />
            OR
            <Box w={"41%"} borderBottom={"1px"} />
          </Flex>
          <Flex
            cursor={"pointer"}
            textColor={"blue"}
            my={3}
            justifyContent={"center"}
          >
            Log In with Google
          </Flex>
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
