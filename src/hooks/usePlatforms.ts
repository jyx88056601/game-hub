import { useQuery } from "@tanstack/react-query";
import { FetchResponse, Platform } from "../hooks/interfaces";
import APIClient from "../services/apiClient";
import initialPlatforms from "../data/initialPlatforms";
import ms from "ms";

// const usePlateforms = () => useData<Platform>('./platforms/lists/parents'); 

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlateforms = () => useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    // parse a function not a result, so () => {}
    queryFn: () => apiClient.getData(),
    staleTime: ms("24h"),
    initialData: initialPlatforms,
});
export default usePlateforms