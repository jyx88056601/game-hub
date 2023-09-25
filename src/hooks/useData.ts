 import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react"; 
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse, Platform } from "../hooks/interfaces";
 
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
 
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false);
      });
    return () => controller.abort();
  }, deps ? [...deps] : []);
  return { data, error, isLoading };
 

};

// const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => useQuery({
//   queryKey: ["games"],
//   queryFn: () =>  apiClient.get<FetchResponse<T>>(endpoint).then(res => res.data)
// })


export default useData;