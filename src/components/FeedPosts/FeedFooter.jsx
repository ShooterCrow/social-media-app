import { Box, Button, Container, Flex, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdOutlineModeComment } from "react-icons/md";
import { BsSave2 } from "react-icons/bs";


const FeedFooter = ({username}) => {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(0)
  const [likeHeart, setLikeHeart] = useState(<FaRegHeart />)
  const handleLike = () => {
    if (liked) {
      setLikeHeart(false)
      setLikes(likes - 1)
    } else {
      setLikeHeart(true)
      setLikes(likes + 1)
    }
    setLiked(!liked)
  }
  return (
    <Container mx={2} px={0}>
      <Flex gap={1} direction={"column"}>
        <Flex w={"100%"} justifyContent={"space-between"} my={2} onClick={handleLike}>
          <Flex gap={2}>
            {liked ? <FaHeart color='red' /> : <FaRegHeart />}
            <MdOutlineModeComment />
          </Flex>
          <Box>
            <BsSave2 />
          </Box>
        </Flex>
        <Text>
          {likes} <span> likes</span>
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>{username}</span> <span>Javascript is fun</span>
        </Text>
        <Text color={"gray.500"}>View all 2343 comments</Text>
        <Flex display={{ base: "none", md: "flex" }} gap={1}>
          <Input outline={"none"} type='text' placeholder='Write a comment' />
          <Button>Post</Button>
        </Flex>
      </Flex>
    </Container>
  )
}

export default FeedFooter
