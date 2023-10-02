import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";   
import { FetchResponse  } from "../hooks/interfaces";
import axios from "axios";
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
 
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios.create({
      baseURL: "https://api.rawg.io/api",
      params:{
          key: "f91e1a66244b41d38e66ecaeb0297fa0"
      }
  })
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


export default useData;