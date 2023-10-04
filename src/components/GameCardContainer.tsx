import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GemeCardContainerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GemeCardContainerProps) => {
  return (
    <Box width="100%" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
