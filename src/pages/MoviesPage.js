import SearchBar from "components/SearchBar/SearchBar"
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchMovies } from "services/api";
import toast, { Toaster } from 'react-hot-toast';
import MoviesList from "components/MoviesList/MoviesList";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

    useEffect(() => {
        if (!query) {
            return;
          }

        const getSearchMovies = async () => {
    try {
        setLoading(true)
        setError(false);
        const data = await fetchSearchMovies(query)
        setMovies(data.results)
        console.log(data.results);
    } catch (error) {
        setError(true);
          toast.error('Sorry, something went wrong, please try again!',{
            duration: 4000,
        });
    } finally {
        setLoading(false)
        setError(false);
    }}
    
    getSearchMovies()
    
    }, [query])

    function onSubmit(e) {
        e.preventDefault();
        const value = e.target.elements.query.value;
    
        if (value === '') {
            return
        };
    
        setSearchParams({ query: value });
        e.target.reset();
      }

    return (
        <div>
            <SearchBar onSubmit={onSubmit}/>
            {movies.length > 0 && <MoviesList movies={movies} />}
        </div>
    )
}

export default MoviesPage