import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import FeedPosts from '../components/FeedPosts/FeedPosts'

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex justifyContent={"space-evenly"} gap={20}>
        <Box my={5} width={"100%"}>
          <FeedPosts />
        </Box>
        <Box my={5} maxW={"300px"} width={"100%"} display={{base: "none", md: "block"}}>
          Suggested Users
        </Box>
      </Flex>
    </Container>
  )
}

export default HomePage