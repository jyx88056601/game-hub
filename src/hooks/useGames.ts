import useData from "./useData";
import {Genre, Platform, Game} from "../hooks/interfaces" 


const useGames = (selectedGenre : Genre | null, selectedPlatform: Platform | null) =>  
useData<Game>('/games',
  {params: {genres: selectedGenre?.id, platforms : selectedPlatform?.id} }, 
  [selectedGenre?.id, selectedPlatform?.id]
);
export default useGames

  