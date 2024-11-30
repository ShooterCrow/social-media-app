import { Avatar, Flex, Tooltip, Link, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { LuHome } from "react-icons/lu";

import {
  CreatePostLogo,
  InstagramLogo,
  NotificationsLogo,
  SearchLogo,
} from "../assets/constants";
import SideBarItem from "./SideBarItem";

const BarComponents = ({ sideBar, dir, dir2, len }) => {
  const components = [
    {
      icon: <LuHome />,
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
      icon: <Avatar name="Profile Photo" size={"xs"} />,
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
    >
      {components.map((component, index) => {
        return sideBar ? (
          <SideBarItem 
          link={component.link}
          icon={component.icon}
          text={component.text}
          key={index} />
       
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
