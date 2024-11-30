import { Avatar, Flex, Tooltip, Link, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import {
  CreatePostLogo,
  InstagramLogo,
  NotificationsLogo,
  SearchLogo,
} from "../assets/constants";

const BarComponents = ({ sideBar, dir, dir2, len }) => {
  const components = [
    {
      icon: <AiFillHome />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create Post",
    },
    {
      icon: <Avatar />,
      text: "Profile",
      link: "/asaprojrammer",
    },
  ];

  return (
    <Flex
      direction={sideBar ? dir : "row"}
      justifyContent={sideBar ? "start" : "space-between"}
      alignItems="center"
      w="full"
      h={sideBar ? "auto" : "10vh"}
      px={4}
      bg="gray.900"
    >
      {components.map((component, index) => {
        return sideBar ? (
          <Link
            p={2}
            display={"flex"}
            to={component.link || null}
            as={RouterLink}
            gap={4}
            _hover={{ bg: "whiteAlpha.400", textDecor: "none" }}
            borderRadius={6}
            w={"full"}
            direction={dir2}
            key={index}
          >
            {component.icon}
            <Box>{component.text}</Box>
          </Link>
        ) : (
          <Tooltip
            key={index}
            hasArrow
            label={component.text}
            placement="top"
            openDelay={500}
          >
            <Link
              as={RouterLink}
              to={component.link || "/"}
              display={"flex"}
              justifyContent="center"
              alignItems="center"
              flex="1"
              h="full"
              _hover={{ bg: "whiteAlpha.400", textDecor: "none" }}
            >
              {component.icon}
            </Link>
          </Tooltip>
        );
      })}
    </Flex>
  );
};

export default BarComponents;
