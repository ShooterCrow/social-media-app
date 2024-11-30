import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramMobileLogo } from "../../assets/constants";
import BarComponents from "../BarComponents";

const BottomBar = () => {
  return (
    <Box
      w={"100vw"}
      borderTop={"1px solid"}
      py={6}
      borderColor={"whiteAlpha.300"}
      position={"sticky"}
      top={0}
      bottom={0}
      px={2}
    >
      <Flex alignItems={"center"} w={"100%"} direction={"row"}>
        <BarComponents sideBar={false} dir={"row"} />
      </Flex>
    </Box>
  );
};

export default BottomBar;
