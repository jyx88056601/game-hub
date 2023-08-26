import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


export interface FetchResponse<T> {
    count: number;
    results: T[];
}


const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, {signal: controller.signal}) // FetchGamesResponse defined above to limit the res format
      .then((res) => {
        setData(res.data.results);
        setLoading(false);})
      .catch((err) => { 
        if(err instanceof CanceledError) return; // if(err.name === 'CanceledError') return;
        setError(err.message);
        setLoading(false);
      });
      return ()=> controller.abort();
  }, []); // []: If you do not want the useEffect callback to run on every render 
 
  return {data, error, isLoading};
};
 
export default useData;

  