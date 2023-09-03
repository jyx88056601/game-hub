import useData from "./useData";
import {Genre} from "../hooks/interfaces"
const useGenres = ()=> useData<Genre>("./genres");

export default useGenres;

  