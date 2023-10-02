import { Genre, FetchResponse } from "../hooks/interfaces"
import { useQuery } from "@tanstack/react-query"
import genres from "../data/genres";
import APIClient from "../services/apiClient";
const api = new APIClient<Genre>("/genres");

const useGenres = () => useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["Genres"],
    // queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then(res => res.data),
    queryFn: () => api.getData(),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres }
})
export default useGenres;

