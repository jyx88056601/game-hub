import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
// import useGames from "../hooks/useGames";
import useInfiniteGames from "./useInfiniteGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../hooks/interfaces";
import React from "react";
interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  // 1. get data from useGames.tsx
  // const { data, error, isLoading } = useGames(gameQuery); 

  const {data, fetchNextPage, isFetchingNextPage, hasNextPage, error, isLoading } =  useInfiniteGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  if (error) return <Text>{error.message}</Text>;
  return (
    // display the Game[] to the webpage as a list and deal with the error condition
    <Box padding="5px">
      {/* <ul>
        {data.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul> */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton key={skeleton}></GameCardSkeleton>
            </GameCardContainer>
          ))}
          
        { /* useInfiniteGames hook*/
        data?.pages.map((page, index) => (
            <React.Fragment>
              {page.results.map((game) =>
                  <GameCardContainer key = {index}>
                      <GameCard game = {game} key = {game.id}></GameCard>
                  </GameCardContainer>)
              }
            </React.Fragment>
          ))
        }
        
        {/* {data?.results.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game}></GameCard>
          </GameCardContainer>
        ))} THIS IS WITH USEGAMES HOOK*/}
      </SimpleGrid>
      {hasNextPage && <Button marginY="5px" onClick={()=>fetchNextPage()}>{isFetchingNextPage ? "Loading..." : "Load more"}</Button>} 
    </Box>
  );
};

export default GameGrid;
