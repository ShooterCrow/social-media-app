import { Avatar, Box, Divider, Flex, GridItem, HStack, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { BiSolidComment } from "react-icons/bi"
import { BsAndroid, BsFillHeartFill, BsSuitHeart } from "react-icons/bs"
import { MdDelete } from "react-icons/md"
import Comment from "./Comment"
import FeedFooter from "../../components/FeedPosts/FeedFooter"

const ProfilePost = ({ image }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = useState('xl')
  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }
  return (
    <GridItem
      onClick={() => handleSizeClick(size)}
      cursor={"pointer"}
      borderRadius={4}
      overflow={"hidden"}
      border={"1px solid"}
      borderColor={"whiteAlpha.300"}
      position={"relative"}
      aspectRatio={1 / 1}>

      <Flex
        position={"absolute"}
        justifyContent={"center"}
        alignItems={"center"}
        top={0}
        bottom={0}
        right={0}
        left={0}
        background={"rgba(0,0,10,0.6)"}
        opacity={0}
        _hover={{ opacity: 1 }}
        transition={"all .2s ease"}
      >
        <HStack>
          <HStack>
            <BsFillHeartFill />
            <Text>573</Text>
          </HStack>
          <HStack>
            <BiSolidComment />
            <Text>82</Text>
          </HStack>
        </HStack>
      </Flex>

      <Image
        objectFit={"cover"}
        w={"100%"}
        height={"100%"}
        src={image} />

      <Modal isCentered={true} isOpen={isOpen} size={{ base: "3xl", md: "5xl", lg: "5xl" }} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={0}>
          <ModalBody>
            <Flex gap={4} w={{ base: "90%", sm: "70%", md: "full" }} mx={"auto"}>
              <Box overflow={"hidden"} border={"1px solid"} borderColor={"whiteAlpha.300"} flex={1.5} borderRadius={4}>
                <Image src={image} alt="Users Post" />
              </Box>
              <ModalCloseButton />
              <Flex flexDir={"column"} flex={1} px={10} display={{ base: "none", md: "flex" }}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <HStack>
                    <Avatar src="" size={"sm"} name="Victor" />
                    <Text fontWeight={"bold"} fontSize={12}>victorvelley_1</Text>
                  </HStack>
                  <HStack>
                    <Box _hover={{ color: "red" }}>
                      <MdDelete size={20} cursor={"pointer"} />
                    </Box>
                    <ModalCloseButton />
                  </HStack>
                </Flex>
                <Divider my={3} />
                <VStack w={"full"} alignItems={"start"} maxH={"350px"} overflowY={"auto"} >
                  <Comment
                    createdAt={"1 Day ago"}
                    userName={"victorvelley_1"}
                    profilePic={"/1.jpg"}
                    text={"This is sooo cool, I really like it, it gives me joy and happiness"} />
                  <Comment
                    createdAt={"1 Day ago"}
                    userName={"victorvelley_1"}
                    profilePic={"/1.jpg"}
                    text={"This is sooo cool, I really like it, it gives me joy and happiness"} />
                </VStack>
                <Divider my={4} bg={"gray.800"} />
                <Box mt={"auto"}>
                  <FeedFooter isProfile={true} />
                </Box>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </GridItem>
  )
}

export default ProfilePost
