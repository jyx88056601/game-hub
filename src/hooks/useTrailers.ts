import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/apiClient";
import { Trailer } from "./entities";

const useTrailers = (id: number) => {
    const apiClient = new APIClient<Trailer>(`/games/${id}/movies`);
    return useQuery({
        queryKey: ["trailer", id],
        queryFn: () => apiClient.getData()
    });
}
export default useTrailers;