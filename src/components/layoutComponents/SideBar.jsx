import { Avatar, Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { CreatePostLogo, InstagramLogo, NotificationsLogo, SearchLogo } from "../../assets/constants";
import BarComponents from "../BarComponents";
import SideBarItem from "../SideBarItem";
import { RiLogoutBoxLine } from "react-icons/ri";



const SideBar = () => {

  return (
    <Flex
      h={"100vh"}
      borderRight={"1px solid"}
      py={6}
      borderColor={"whiteAlpha.300"}
      position={"sticky"}
      top={0}
      bottom={0}
      px={4}
      direction={"column"}
    >
      <Flex direction={"column"} gap={10} w={"full"} h={"full"} >
        <InstagramLogo />
        <BarComponents sideBar={true} dir={"column"} />
      </Flex>

      <Box>
        <SideBarItem
          link={"IoMdLogOut"}
          icon={<RiLogoutBoxLine />}
          text={"Logout"}
        />
      </Box>
    </Flex>
  );
};

export default SideBar;
