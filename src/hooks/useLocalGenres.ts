import genres from "../data/genres";
const useLocalGenres = () => (
    {data: genres, isLoading: false, error: null} 
)

export default useLocalGenres;