import SearchBar from "components/SearchBar/SearchBar"
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchMovies } from "services/api";
import toast, {Toaster} from 'react-hot-toast';
import MoviesList from "components/MoviesList/MoviesList";
import Loader from "components/Loader/Loader";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

    useEffect(() => {
        if(!query){
            return
        }

        const controller = new AbortController() 

        const getSearchMovies = async () => {
    try {
        setLoading(true)
        setError(false);
        const data = await fetchSearchMovies(query, {
            signal: controller.signal
        })
        setMovies(data.results)
    } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
            setError(true);
            toast.error('Sorry, something went wrong, please try again!',{
              duration: 4000,
          });
        }  
    } finally {
        setLoading(false)
        setError(false);
    }}
    
    getSearchMovies()

    return () => {
        controller.abort()
    }
    
    }, [query])

    // console.log(movies);
    // if(!movies) {
    //     toast.error(
    //       'Sorry, there is no image for your search query, please try again!',{
    //         duration: 4000,
    //     });
    //     return
    //   }

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
        <main>
            {loading && <Loader/>}
            <SearchBar onSubmit={onSubmit}/>
            {movies.length > 0 && !loading && !error && <MoviesList movies={movies} />}
            {movies.length === 0 && query &&  <h2>Nothing found</h2>}
            {error && !loading && toast.error('Sorry, something went wrong, please reload the page!',{
               duration: 4000,
            })}
            <Toaster position="top-right" reverseOrder={false}/>
        </main>
    )
}

export default MoviesPage