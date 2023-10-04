import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
// import useGames from "../hooks/useGames";
import useInfiniteGames from "../hooks/useInfiniteGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton"; 
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";
import useGameQueryStore from "../services/store";
 
const GameGrid = () => {
  // 1. get data from useGames.tsx
  // const { data, error, isLoading } = useGames(gameQuery); 

  const gameQuery = useGameQueryStore(s => s.gameQuery);
  const {data, fetchNextPage, isFetchingNextPage, hasNextPage, error, isLoading } =  useInfiniteGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount = data?.pages.reduce(
     (total, page) => total + page.results.length, 0
    )|| 0;
  return (
    // display the Game[] to the webpage as a list and deal with the error condition
    <Box padding="5px">
      {/* <ul>
        {data.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul> */}
      <InfiniteScroll next={() => fetchNextPage()} hasMore={hasNextPage || false} loader={<Spinner></Spinner>} dataLength={fetchedGamesCount}>
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
            <React.Fragment  key={index}>
              {page.results.map((game) =>
                  <GameCardContainer key={game.id}>
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
      {isFetchingNextPage? "Loading...": ""}
      </InfiniteScroll>
      {/* LOAD button version
      {hasNextPage && <Button marginY="5px" onClick={()=>fetchNextPage()}>{isFetchingNextPage ? "Loading..." : "Load more"}</Button>}  */}
    </Box>
  );
};

export default GameGrid;
