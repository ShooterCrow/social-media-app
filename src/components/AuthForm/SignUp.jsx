import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"

const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: null,
    fullname: null,
    username: null,
    password: null,
  })

  const [showPassWord, setShowPassWord] = useState(false)
  return (
    <>
      <Input val={inputs.email} size={"sm"} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} type="email" my={3} placeholder={"Email"} />
      <Input val={inputs.username} size={"sm"} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} type="text" my={3} placeholder={"Username"} />
      <Input val={inputs.fullname} size={"sm"} onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })} type="text" my={3} placeholder={"Fullname"} />
      <InputGroup>
        <Input
          display={"flex"}
          alignItems={"center"}
          val={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          size={"sm"}
          type={showPassWord ? "text" : "password"} my={3}
          placeholder={"Password"} />
        <InputRightElement>
          <Button variant={"ghost"} size={"sm"} onClick={() => setShowPassWord(!showPassWord)}>
            {showPassWord ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button mt={3} w={"full"}>
        Sign Up
      </Button>
    </>
  )
}

export default SignUp
