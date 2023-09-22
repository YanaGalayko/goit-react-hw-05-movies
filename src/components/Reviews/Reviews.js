import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchReviewsMovie } from "services/api"
import toast, {Toaster} from 'react-hot-toast';
import Loader from "components/Loader/Loader";

const Reviews = () => {
const {movieId} = useParams()

const [reviews, setReviews] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)

useEffect(() => {
        if (!movieId) {
            return;
          }
        const controller = new AbortController()

        const getReviews = async () => {
    try {
        setLoading(true)
        setError(false);
        const data = await fetchReviewsMovie(movieId, {
            signal: controller.signal
        })
        setReviews(data.results)
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
    
    getReviews()

    return () => {
        controller.abort()
    }
    
    }, [movieId])

    return (
        
        <>
         {loading && <Loader/>}
           {reviews.length > 0 ? (
            <ul>
                {reviews.map(({ author, content, id}) => {
                   return (
                    <li key={id}>
                    <h3>Autor: {author}</h3>
                    <p>{content}</p>
                   </li>
                 )
                })}
            </ul>
            ) : (<p>
                 We don't have any reviews for this movie
                 </p>)}
         {error && !loading && toast.error('Sorry, something went wrong, please reload the page!',{
               duration: 4000,
            })}
        <Toaster position="top-right" reverseOrder={false}/>   
        </> 
        )
}

export default Reviews