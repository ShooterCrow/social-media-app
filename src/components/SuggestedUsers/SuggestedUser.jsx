import { Avatar, HStack, Text, Link as ChakraLink } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"


const SuggestedUser = ({username}) => {
    return (
        <HStack p={5} w={"100%"} justifyContent={"space-between"} alignItems={"center"} >
            <HStack>
                <Avatar size={"xs"} name="Usep Pic" src="/1.jpg" />
                <Text fontWeight={"bold"} >{username}</Text>
            </HStack>
            <ChakraLink to={"/auth"} as={RouterLink} fontSize={14} _hover={{ color: "white" }} fontWeight={"bold"} >Follow</ChakraLink>
        </HStack>
    )
}

export default SuggestedUser
