import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Genre {
    id: number;
    name: string;
  }
  
  export interface FetchGenresResponse {
    count: number;
    result: Genre[];
  }
  

export interface FetchGenresResponse {
    count: number;
  results: Genre[];
}

const useGenre = ()=> {
  const [genres, setGenres] = useState <Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGenresResponse>("/genres", {signal: controller.signal}) // FetchGenresResponse defined above to limit the res format
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);})
      .catch((err) => { 
        if(err instanceof CanceledError) return; // if(err.name === 'CanceledError') return;
        setError(err.message);
        setLoading(false);
      });
     
      return ()=> controller.abort();
  }, []); // []: If you do not want the useEffect callback to run on every render 
 
  return {genres, error, isLoading};
}
export default useGenre;

  