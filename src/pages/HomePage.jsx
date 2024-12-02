import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import FeedPosts from '../components/FeedPosts/FeedPosts'
import SuggestedUsers from '../components/SuggestedUsers/SuggestedUsers'

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex justifyContent={"space-between"} gap={20}>
        <Box my={5} width={"100%"}>
          <FeedPosts />
        </Box>
        <Box my={5} maxW={"300px"} width={"100%"} display={{base: "none", md: "block"}}>
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  )
}

export default HomePage