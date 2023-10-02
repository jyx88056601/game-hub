import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../hooks/interfaces";
import useGenres from "../hooks/useGenres";
interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const {data: genres} = useGenres();
  const genre = genres.results.find(genre => genre.id === gameQuery.genreId);
  const heading = `${gameQuery.platformId || ""}
  ${genre?.name || ""}  Games`;
  return <Heading as="h1"> {heading}</Heading>;
};

export default GameHeading;
