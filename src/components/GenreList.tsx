import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenre();

  return (
    // <ul>
    //   {data.map((genre) => (
    //     <li key={genre.id}>{genre.name}</li>
    //   ))}
    // </ul>

    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} padding="5px">
          <HStack>
            <Image
              src={genre.image_background}
              boxSize="32px"
              borderRadius={8}
            ></Image>
            <Text fontSize="lg"> {genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
