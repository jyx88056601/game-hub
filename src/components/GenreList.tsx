import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenres";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { data, isLoading, error } = useGenre();

  return (
    // <ul>
    //   {data.map((genre) => (
    //     <li key={genre.id}>{genre.name}</li>
    //   ))}
    // </ul>

    // if there is an error, just show error messages and add spinner when the data is loading
    <List>
      {isLoading && <Spinner></Spinner>}
      {error && <Text>{error}</Text>}
      {data.map((genre) => (
        <ListItem key={genre.id} padding="5px">
          <HStack>
            <Image
              src={genre.image_background}
              boxSize="32px"
              borderRadius={8}
            ></Image>
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              fontSize="lg"
              variant="link"
              onClick={() => {
                onSelectGenre(genre);
              }}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
