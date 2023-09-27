import useData from "./useData"; // previous hook to get the data
import {FetchResponse, Game, GameQuery} from "../hooks/interfaces" 
import { useQuery } from  "@tanstack/react-query"
import apiClient from "../services/api-client";
import APIClient from "../services/apiClient";

const api = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {
  // anytime the variables below changes, refetching the data from server
 

  return useQuery<FetchResponse<Game>,Error>({
    queryKey: ["games", gameQuery],
    // params : {
    //   genres: gameQuery.genre?.id,
    //   parent_platforms: gameQuery.platform?.id,
    //   ordering: gameQuery.sortOrder,
    //   search: gameQuery.searchText
    // }
    // queryFn: () => apiClient.get<FetchResponse<Game>>("/games", {params: params})
    // .then(res => res.data)
    queryFn:  () => api.getData({ 
      params : {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      }
    }),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useGames

  