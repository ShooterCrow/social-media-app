import { Avatar, HStack, Text, Link as ChakraLink } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"

const UserProfile = () => {
    return (
        <HStack p={5} gap={2} w={"100%"} justifyContent={"space-between"} alignItems={"center"} >
            <HStack>
                <Avatar size={"xs"} name="Usep Pic" src="/1.jpg" />
                <Text fontWeight={"bold"} >Username</Text>
            </HStack>
            <ChakraLink to={"/auth"} as={RouterLink} fontSize={14} _hover={{ color: "white" }} fontWeight={"bold"} >Log Out</ChakraLink>
        </HStack>
    )
}

export default UserProfile
