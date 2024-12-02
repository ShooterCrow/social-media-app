import { Flex, Link, Text, VStack } from "@chakra-ui/react"
import SuggestedUser from "./SuggestedUser"
import UserProfile from "./UserProfile"
import { Link as RouterLink } from "react-router-dom"

const SuggestedUsers = () => {
    return (
        <VStack w={"100%"} justifyContent={"space-between"} >
            <UserProfile />
            <VStack w={"100%"}>
                <Flex px={5} w={"full"} justifyContent={"space-between"} alignItems={"center"}>
                    <Text color={"gray.500"}>Suggested for You</Text>
                    <Link as={RouterLink} textDecoration={"none"} _hover={{ color: "gray.500" }} fontWeight="bold">See All</Link>
                </Flex>
                <SuggestedUser />
                <SuggestedUser />
                <SuggestedUser />
                <SuggestedUser />
            </VStack>
            <Text color={"gray.500"} w={"100%"} px={5}>Made with ❤️ by <Link target="_blank" fontWeight={"bold"} _hover={{color: "gray", textDecoration: "none"}} color={"blue.500"} to="https://github.com/ShooterCrow" col as={RouterLink}>V I C</Link></Text>
        </VStack>
    )
}

export default SuggestedUsers
