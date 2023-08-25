import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
const GameGrid = () => {
  const { games, error } = useGames();
  return (
    // display the Game[] to the webpage as a list and deal with the error condition
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
