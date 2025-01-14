import { Avatar, Box, Flex, Link, Text, VStack } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"

const ProfileHeader = () => {
  return (
    <Flex direction={{base: "column", md: "row"}} alignItems={"center"} w={"100%"} gap={10}>
      <Avatar size={"xl"} />
      <VStack alignItems={{base: "center", md: "flex-start"}} justifyContent={"flex-start"} spacing={3}>
        <Flex direction={{base: "column", md: "row"}} alignItems={"center"} gap={5}>
            <Text>Username</Text>
            <Box color={"black"} borderRadius={8} backgroundColor={"white"} px={4} py={1} fontWeight={"semibold"} >Edit Profile</Box>
        </Flex>
        <Flex gap={5}>
            <Flex><Text mr={1} fontWeight={"bold"}>4 </Text><Text color={"gray.300"}>Posts</Text></Flex>
            <Flex><Text mr={1} fontWeight={"bold"}>42144 </Text><Text color={"gray.300"}>Followers</Text></Flex>
            <Flex><Text mr={1} fontWeight={"bold"}>5321 </Text><Text color={"gray.300"}>Following</Text></Flex>
        </Flex>
        <Text>Today I focused on completing my JS project</Text>
        <Link to={"/"} fontWeight={"semibold"} as={RouterLink}>bit.ly/fewfe</Link>
      </VStack>
    </Flex>
  )
}

export default ProfileHeader
