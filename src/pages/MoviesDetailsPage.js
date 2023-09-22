import { useEffect, useRef, useState } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import { fetchDetailsMovie } from "services/api"
import toast, { Toaster } from 'react-hot-toast';
import MoviesDetails from "components/MoviesDetails/MoviesDetails";
import Loader from "components/Loader/Loader";

const MoviesDetailsPage = () => {
    const {movieId} = useParams()
    const location = useLocation();

    const [movieDetails, setDetailsMovie] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const backLink = useRef(location.state?.from ?? '/');

    useEffect(() => {
        if (!movieId) {
            return;
          }
        const controller = new AbortController()  

        const getMoviesDetails = async () => {
    try {
        setLoading(true)
        setError(false);
        const data = await fetchDetailsMovie(movieId, {
          signal: controller.signal
        })
        setDetailsMovie(data)
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
    
    getMoviesDetails()

    return () => {
      controller.abort()
  }
    
    }, [movieId])

    return (
        <>
        {loading && <Loader />}
        {!loading && <Link to={backLink.current}>
            <button type="button">Go back</button>
          </Link>}
         {movieDetails && !loading && !error && <MoviesDetails movieDetails={movieDetails}/>}
         {!loading && 
         <>
          <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">
            <button type="button">Cast</button>
            </Link>
          </li>
          <li>
            <Link to="reviews">
            <button type="button">Reviews</button>
            </Link>
          </li>
        </ul>
         </>
         }
        <Outlet/>
        {error && !loading && toast.error('Sorry, something went wrong, please reload the page!',{
               duration: 4000,
            })}
        <Toaster position="top-right" reverseOrder={false}/>
        </>
        
    )
}

export default MoviesDetailsPage