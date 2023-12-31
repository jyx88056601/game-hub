import { FetchResponse, Game, GameQuery } from "./entities"
import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/apiClient";
import ms from "ms";
const api = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {
  // anytime the variables below changes, refetching the data from server
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    // params : {
    //   genres: gameQuery.genre?.id,
    //   parent_platforms: gameQuery.platform?.id,
    //   ordering: gameQuery.sortOrder,
    //   search: gameQuery.searchText
    // }
    // queryFn: () => apiClient.get<FetchResponse<Game>>("/games", {params: params})
    // .then(res => res.data)
    queryFn: () => api.getData({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      }
    }),
    staleTime: ms("24h"),
  });
};

export default useGames

