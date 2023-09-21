import Loader from "components/Loader/Loader"
import MoviesList from "components/MoviesList/MoviesList"
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react"
import { fetchTrendingMovies } from "services/api"

const HomePage = () => {
const [movies, setMovies] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)

useEffect(() => {
    const getTrendMovies = async () => {
try {
    setLoading(true)
    setError(false);
    const data = await fetchTrendingMovies()
    setMovies(data.results)
    // console.log(data.results);
} catch (error) {
    setError(true);
      toast.error('Sorry, something went wrong, please try again!',{
        duration: 4000,
    });
} finally {
    setLoading(false)
    setError(false);
}}

getTrendMovies()

}, [])


return (
        <main>
        <h2>Trending movies today</h2>
        {loading && <Loader/>}
        {movies.length > 0 && !loading && !error && <MoviesList movies={movies}/>}
        <Toaster position="top-right" reverseOrder={false}/>
        </main>
    )
}

export default HomePage