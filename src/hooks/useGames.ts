import useData from "./useData"; // previous hook to get the data
import {FetchResponse, Game, GameQuery} from "../hooks/interfaces" 
import { useQuery } from  "@tanstack/react-query"
import apiClient from "../services/api-client";
const useGames = (gameQuery: GameQuery) => {
  // anytime the variables below changes, refetching the data from server
  const params = {
    genres: gameQuery.genre?.id,
    parent_platforms: gameQuery.platform?.id,
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText
  };

  return useQuery<FetchResponse<Game>,Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => apiClient.get<FetchResponse<Game>>("/games", {params: params})
    .then(res => res.data)
  });
};

export default useGames

  