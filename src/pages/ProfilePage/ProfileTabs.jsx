import { Box, Flex, Text } from "@chakra-ui/react"
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs"

const ProfileTabs = () => {
  return (
    <Flex justifyContent={"center"} my={5} gap={5} fontWeight={"bold"}>
      <Flex borderBottom={{md: "3px solid"}} pb={3} cursor={"pointer"} alignItems={"center"} gap={2}>
        <Box fontSize={"20px"}>
          <BsGrid3X3 />
        </Box>
        <Text display={{base: "none", md: "block"}} >POSTS</Text>
      </Flex>

      <Flex pb={3} cursor={"pointer"} alignItems={"center"} gap={2}>
        <Box fontSize={"20px"}>
          <BsBookmark />
        </Box>
        <Text display={{base: "none", md: "block"}} >SAVED</Text>
      </Flex>

      <Flex pb={3} cursor={"pointer"} alignItems={"center"} gap={2}>
        <Box fontSize={"20px"}>
          <BsSuitHeart />
        </Box>
        <Text display={{base: "none", md: "block"}} >LIKED</Text>
      </Flex>
    </Flex>
  )
}

export default ProfileTabs
