import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../services/store";

const GenreList = ( ) => {
  const { data, isLoading, error } = useGenres(); // dynamically
  // const { data, isLoading, error } = useLocalGenres(); // statically from local files

  const selectedGenreId = useGameQueryStore( s => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore( s => s.setGenreId);
  return (
    <>
      <Heading marginY="10px">Genres</Heading>
      <List>
        {isLoading && <Spinner></Spinner>}
        {error && <Text>{error.message}</Text>}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} padding="5px">
            <HStack>
              <Image
                src={genre.image_background}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              ></Image>
              <Button
                textAlign="left"
                whiteSpace={"normal"}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                onClick={() =>  setSelectedGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
