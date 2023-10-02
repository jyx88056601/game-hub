import { useQuery } from "@tanstack/react-query"; 
import { FetchResponse, Platform } from "../hooks/interfaces";
import platforms from "../data/platforms";
import APIClient from "../services/apiClient";


// const usePlateforms = () => useData<Platform>('./platforms/lists/parents');


const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlateforms = () => useQuery<FetchResponse<Platform>,Error>({
    queryKey: ["platforms"],
    // parse a function not a result, so () => {}
    queryFn: () => apiClient.getData(),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {count : platforms.length, results: platforms}
});
export default usePlateforms