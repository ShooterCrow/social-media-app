import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const FeedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} my={{base: 4, md: 6}}>
      <Flex w={"60%"} overflowWrap={'break-word'} gap={2} >
        <Avatar size={"xs"} name='user name'/>
        <Text fontWeight={"bold"} isTruncated >ceeeeeeeeeeeefvesvesvesveesversvewfewfweeeeeeeeevgewwwwwvessssssssssssssscsssssssssscssssssssssssssvesssssssdwweeeeeeeeeeeeeeeeeedfwwwwwwwwwwwweeeeeeeeeeeeeeew</Text>
        <Text color={"gray.500"} >|</Text>
        <Text color={"gray.500"} >1w</Text>
      </Flex>
      <Box>
        <Text cursor={"pointer"} transition={"0.2s ease-in-out"} color={"blue.500"} _hover={{color: "white"}} fontWeight={"bold"} >Unfollow</Text>
      </Box>
    </Flex>
  )
}

export default FeedHeader
