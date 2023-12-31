import Loader from "components/Loader/Loader"
import MoviesList from "components/MoviesList/MoviesList"
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react"
import { fetchTrendingMovies } from "services/api"
import { Container, Title } from "./HomePageStyled";

const HomePage = () => {
const [movies, setMovies] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)

useEffect(() => {
    const controller = new AbortController()

    const getTrendMovies = async () => {
try {
    setLoading(true)
    setError(false);
    const data = await fetchTrendingMovies({signal: controller.signal})
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

getTrendMovies()

return () => {
    controller.abort()
}

}, [])


return (
        <Container>
            {loading && <Loader/>}
            {!loading && <Title>Trending movies today</Title>}
            {movies.length > 0 && !loading && !error && <MoviesList movies={movies}/>}
            {error && !loading &&  toast.error('Sorry, something went wrong, please reload the page!',{
               duration: 4000,
            })}
          <Toaster position="top-right" reverseOrder={false}/>
        </Container>
      
    )
}

export default HomePage