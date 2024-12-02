import { Box, Container, Flex, HStack, Skeleton, SkeletonCircle, Stack, VStack } from "@chakra-ui/react"
import FeedPost from "./FeedPost"
import { useEffect, useState } from "react"

const FeedPosts = () => {
    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsloading(false)
        }, 5000);
    }, [])
    return (
        <Container maxW={"100%"}>
            {isLoading && [0, 1, 2, 3].map((user, id) => {
                return (
                <VStack key={id} gap={4} alignItems={"flex-start"} mb={10} >
                    <Flex gap={2}>
                        <SkeletonCircle size="10" />
                        <VStack alignItems={"flex-start"}>
                            <Skeleton height="10px" w="300px" />
                            <Skeleton height="10px" w="100px" />
                        </VStack>
                    </Flex>
                    <Skeleton w="100%">
                        <Box h="500px">{user}</Box>
                    </Skeleton>
                </VStack>

                )
            })}
            {!isLoading && <>
                <FeedPost avatar="/1.jpg" image="/1.jpg" username="victorjoe222" />
                <FeedPost avatar="/3.jpg" image="/3.jpg" username="emmanuella424" />
                <FeedPost avatar="/4.jpg" image="/4.jpg" username="onyinye73" />
                <FeedPost avatar="/5.jpg" image="/5.jpg" username="sammy898" />
            </>
            }
        </Container>
    )
}

export default FeedPosts
