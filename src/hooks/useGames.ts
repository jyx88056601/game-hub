import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform : Platform}[];
  platforms: {}[];
  metacritic: number;
}

export interface FetchGamesResponse {
  results: Game[];
}

const useGames = ()=> {

  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  
  
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal}) // FetchGamesResponse defined above to limit the res format
      .then((res) => setGames(res.data.results))
      .catch((err) => { 
        if(err instanceof CanceledError) return; // if(err.name === 'CanceledError') return;
        setError(err.message);
      });
     
      return ()=> controller.abort();
  }, []); // []: If you do not want the useEffect callback to run on every render 

  return {games, error};
  
}
export default useGames

  