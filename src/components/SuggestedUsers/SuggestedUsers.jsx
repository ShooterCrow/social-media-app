import { Flex, Link, Text, VStack } from "@chakra-ui/react"
import SuggestedUser from "./SuggestedUser"
import UserProfile from "./UserProfile"
import { Link as RouterLink } from "react-router-dom"

const SuggestedUsers = () => {
    return (
        <VStack w={"100%"} position={"static"} justifyContent={"space-between"} >
            <UserProfile />
            <VStack w={"100%"}>
                <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
                    <Text color={"gray.500"}>Suggested for You</Text>
                    <Link as={RouterLink} textDecoration={"none"} _hover={{ color: "gray.500" }} fontWeight="bold">See All</Link>
                </Flex>
                <SuggestedUser avatar="/1.jpg" followers={"5403"} username={"newmantor.0"} />
                <SuggestedUser avatar="/2.jpg" followers={"43203"} username={"victor.0"} />
                <SuggestedUser avatar="/3.jpg" followers={"1203"} username={"wizzyvictor.0"} />
                <SuggestedUser avatar="/4.jpg" followers={"4403"} username={"bankinton43"} />
            </VStack>
            <Text color={"gray.500"} w={"100%"} px={5}>Made with ❤️ by <Link target="_blank" fontWeight={"bold"} _hover={{color: "gray", textDecoration: "none"}} color={"blue.500"} to="https://github.com/ShooterCrow" col as={RouterLink}>V I C</Link></Text>
        </VStack>
    )
}

export default SuggestedUsers
