import { Avatar, HStack, Text, Link as ChakraLink, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { Link as RouterLink } from "react-router-dom"


const SuggestedUser = ({ username, avatar, followers }) => {
    const [isFollowing, setIsFollowing] = useState(false)
    return (
        <HStack w={"100%"} justifyContent={"space-between"} alignItems={"center"} >
            <HStack m={0} p={0} >
                <Avatar size={"sm"} name="Usep Pic" src={avatar} />
                <VStack gap={0} my={1} alignItems={"start"}>
                    <Text fontWeight={"bold"} >{username}</Text>
                    <Text color={"gray.500"}>{followers} Followers</Text>
                </VStack>
            </HStack>
            <Text
                onClick={() => setIsFollowing(!isFollowing)}
                fontSize={14}
                cursor={"pointer"}
                _hover={{ color: "white" }}
                fontWeight={"bold"} bg={"gray.700"}
                borderRadius={4} px={2} py={1} >
                {isFollowing ? "Unfollow" : "Follow"}
            </Text>
        </HStack>
    )
}

export default SuggestedUser
