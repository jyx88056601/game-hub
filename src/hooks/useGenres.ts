import { Genre, FetchResponse } from "../hooks/interfaces"
import { useQuery } from "@tanstack/react-query"
import genres from "../data/genres";
import initialGenres from "../data/initialGenres";
import APIClient from "../services/apiClient";
import ms from "ms";

const api = new APIClient<Genre>("/genres");

const useGenres = () => useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["Genres"],
    // queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then(res => res.data),
    queryFn: () => api.getData(),
    staleTime: ms("24h"),
    initialData: initialGenres
})
export default useGenres;

