import useData from "./useData";
import {FetchResponse, Game, GameQuery} from "../hooks/interfaces" 
import { useQuery } from  "@tanstack/react-query"
import apiClient from "../services/api-client";
const useGames = (gameQuery: GameQuery) => {
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

  