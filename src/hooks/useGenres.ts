import { Genre, FetchResponse } from "../hooks/interfaces"
import { useQuery } from "@tanstack/react-query"
import initialGenres from "../data/initialGenres";
import APIClient from "../services/apiClient";
import ms from "ms";

const api = new APIClient<Genre>("/genres");

const useGenres = () => useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["Genres"],
    queryFn: () => api.getData(),
    staleTime: ms("24h"),
    initialData: initialGenres
})
export default useGenres;

