import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link, Flex } from "@chakra-ui/react"

const SideBarItem = ({ link, icon, text }) => {
    return (
        <Link
            p={2}
            display={"flex"}
            to={link || null}
            as={RouterLink}
            gap={4}
            _hover={{ bg: "whiteAlpha.400", textDecor: "none" }}
            borderRadius={6}
            w={"full"}
            >
            <Flex gap={3} alignItems={"center"} justifyContent={"space-evenly"}>
                {icon}
                {text}
            </Flex>
        </Link>
    )
}

export default SideBarItem
