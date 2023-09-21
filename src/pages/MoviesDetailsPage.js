import { useEffect, useState } from "react"
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

    useEffect(() => {
        if (!movieId) {
            return;
          }

        const getMoviesDetails = async () => {
    try {
        setLoading(true)
        setError(false);
        const data = await fetchDetailsMovie(movieId)
        setDetailsMovie(data)
        // console.log(data);
    } catch (error) {
        setError(true);
          toast.error('Sorry, something went wrong, please try again!',{
            duration: 4000,
        });
    } finally {
        setLoading(false)
        setError(false);
    }}
    
    getMoviesDetails()
    
    }, [movieId])

    return (
        <>
          <Link to={location.state?.from ?? '/'}>
            <button type="button">Go back</button>
          </Link>
         {loading && <Loader />}
         
         {movieDetails &&  !error && <MoviesDetails movieDetails={movieDetails}/>}

         
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
        <Outlet/>
        <Toaster position="top-right" reverseOrder={false}/>

        </>
        
    )
}

export default MoviesDetailsPage