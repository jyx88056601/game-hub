import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../hooks/interfaces";
import useGenre from "../hooks/useGenre";
import useGenres from "../hooks/useGenres"; 
import usePlateform from "../hooks/usePlatform";
interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlateform(gameQuery.platformId);

  const heading = `${platform?.name || ""}
  ${genre?.name || ""}  Games`;
  return <Heading as="h1"> {heading}</Heading>;
};

export default GameHeading;
