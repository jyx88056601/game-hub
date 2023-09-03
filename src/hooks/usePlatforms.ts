import useData from "./useData";
import {Platform} from "../hooks/interfaces"

const usePlateforms = () => useData<Platform>('./platforms/lists/parents');
export default usePlateforms