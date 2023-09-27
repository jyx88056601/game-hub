import useData from "./useData"; // previous hook to get the data
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse, Platform } from "../hooks/interfaces";
import platforms from "../data/platforms";

// const usePlateforms = () => useData<Platform>('./platforms/lists/parents');

const usePlateforms = () => useQuery<FetchResponse<Platform>,Error>({
    queryKey: ["platforms"],
    // parse a function not a result, so () => {}
    queryFn: () => apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {count : platforms.length, results: platforms}
});
export default usePlateforms