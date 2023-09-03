import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../hooks/interfaces";
interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading = `${gameQuery.platform?.name || ""}
  ${gameQuery.genre?.name || ""}  Games`;
  return <Heading as="h1"> {heading}</Heading>;
};

export default GameHeading;
