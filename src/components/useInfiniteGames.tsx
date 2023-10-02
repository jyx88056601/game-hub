 import {useInfiniteQuery} from '@tanstack/react-query';
import APIClient from "../services/apiClient";
import {InfiniteFetchResponse, Game, GameQuery} from "../hooks/interfaces" 

const apiClient = new APIClient<Game>("/games");
const useGames = (gameQuery : GameQuery) => {

    return useInfiniteQuery<InfiniteFetchResponse<Game>, Error>({
      queryKey: ['games', gameQuery],
      queryFn: ({ pageParam = 1 }) =>
        apiClient.getData({
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page : pageParam,
          },
        }),
      getNextPageParam: (lastPage,allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined;
      }, 
    });
  };
  
  export default useGames;
