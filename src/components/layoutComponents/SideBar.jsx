import { Avatar, Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { CreatePostLogo, InstagramLogo, NotificationsLogo, SearchLogo } from "../../assets/constants";
import BarComponents from "../BarComponents";

const SideBar = () => {

  return (
    <Box
      h={"100vh"}
      borderRight={"1px solid"}
      py={6}
      borderColor={"whiteAlpha.300"}
      position={"sticky"}
      top={0}
      bottom={0}
      px={4}
    >
      <Flex direction={"column"} gap={10} w={"full"} h={"full"} >
        <Link to={"/"} as={RouterLink} pl={2} cursor={"pointer"}>
          <InstagramLogo />
          <BarComponents sideBar={true} dir={"column"} />
        </Link>
      </Flex>
    </Box>
  );
};

export default SideBar;
