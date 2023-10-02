import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../hooks/interfaces";
import useGenres from "../hooks/useGenres";
import usePlateforms from "../hooks/usePlatforms";
interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const {data: genres} = useGenres();
  const {data: platforms} = usePlateforms();

  const genre = genres.results.find(genre => genre.id === gameQuery.genreId);
  const platform = platforms.results.find(platform => platform.id === gameQuery.platformId);
  const heading = `${platform?.name || ""}
  ${genre?.name || ""}  Games`;
  return <Heading as="h1"> {heading}</Heading>;
};

export default GameHeading;
