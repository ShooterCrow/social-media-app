import { Button, Input } from "@chakra-ui/react"
import { useState } from "react"

const Login = () => {
    const [inputs, setInputs] = useState({
        email: null,
        password: null,
    })
    return (
        <>
            <Input val={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} type="email" my={3} placeholder={"Email"} />
            <Input val={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} type="password" mb={3} placeholder={"Password"} />
            <Button size={"sm"} mt={3} w={"full"}>
                Sign In
            </Button>
        </>
    )
}

export default Login
