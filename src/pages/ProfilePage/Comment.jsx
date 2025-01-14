import { Avatar, Flex, Text } from "@chakra-ui/react"

const Comment = ({ createdAt, userName, profilePic, text }) => {
    return (
        <Flex gap={4}>
            <Avatar src={profilePic} name={userName} size={"sm"} />
            <Flex direction={"column"}>
                <Flex gap={2}>
                    <Flex direction="column">
                        <Text fontWeight={"bold"} fontSize={12}>{userName}</Text>
                        <Text fontSize={12} color={"gray"}>
                            {createdAt}
                        </Text>

                    </Flex>
                    <Text fontSize={14}>{text}</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Comment
