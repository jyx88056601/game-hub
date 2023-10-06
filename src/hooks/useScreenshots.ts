import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/apiClient";
import { ScreenShot } from "./entities";

const useScreenshots = (id: number) => {
    const apiClient = new APIClient<ScreenShot>(`/games/${id}/screenshots`);
    return useQuery({
        queryKey: ["screenshots", id],
        queryFn: () => apiClient.getData(),
    });
}

export default useScreenshots