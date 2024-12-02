import React from 'react'
import FeedHeader from './FeedHeader'
import { Box, Image } from '@chakra-ui/react'
import FeedFooter from './FeedFooter'

const FeedPost = ({ username, avatar, image}) => {
  return (
    <Box width={"100%"} border={"1px solid red"} mb={10}>
      <FeedHeader username={username} avatar={avatar} />
      <Box maxH={"60vh"} overflow={"hidden"} borderRadius={4}>
        <Image src={image} />
      </Box>
      <FeedFooter username={username} />
    </Box>
  )
}

export default FeedPost
