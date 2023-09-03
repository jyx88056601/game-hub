import useData from "./useData";
import {Genre} from "../hooks/interfaces"
const useGenre = ()=> useData<Genre>("./genres");
export default useGenre;

  