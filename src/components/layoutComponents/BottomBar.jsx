import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramMobileLogo } from "../../assets/constants";
import BarComponents from "../BarComponents";

const BottomBar = () => {
  return (
    <Box
      w={"100vw"}
      minW={"100%"}
      borderTop={"1px solid"}
      py={3}
      borderColor={"whiteAlpha.300"}
      position={"fixed"}
      bottom={0}
      left={0}
      px={2}
      bg={"black"}
    >
      <Flex alignItems={"center"} w={"100%"} direction={"row"}>
        <BarComponents sideBar={false} dir={"row"} />
      </Flex>
    </Box>
  );
};

export default BottomBar;
