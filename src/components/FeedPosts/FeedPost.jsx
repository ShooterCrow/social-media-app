import React from 'react'
import FeedHeader from './FeedHeader'
import { Box, Image } from '@chakra-ui/react'
import FeedFooter from './FeedFooter'

const FeedPost = () => {
  return (
    <div>
      <FeedHeader />
      <Box>
        <Image src='/4.jpg' />
      </Box>
      <FeedFooter />
    </div>
  )
}

export default FeedPost
