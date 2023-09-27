import useData from "./useData"; // previous hook to get the data
import {Genre, FetchResponse} from "../hooks/interfaces"
import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/api-client"; 
import genres from "../data/genres";
// const useGenres = ()=> useData<Genre>("./genres");


const useGenres =  () => useQuery<FetchResponse<Genre>,Error>({
    queryKey: ["Genres"],
    queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {count : genres.length, results: genres}
})
export default useGenres;

  