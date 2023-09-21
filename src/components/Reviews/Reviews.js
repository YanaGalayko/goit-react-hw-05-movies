import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchReviewsMovie } from "services/api"
import toast, { Toaster } from 'react-hot-toast';

const Reviews = () => {
const {movieId} = useParams()

const [reviews, setReviews] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)

useEffect(() => {
        if (!movieId) {
            return;
          }

        const getReviews = async () => {
    try {
        setLoading(true)
        setError(false);
        const data = await fetchReviewsMovie(movieId)
        setReviews(data.results)
        console.log(data);
    } catch (error) {
        setError(true);
          toast.error('Sorry, something went wrong, please try again!',{
            duration: 4000,
        });
    } finally {
        setLoading(false)
        setError(false);
    }}
    
    getReviews()
    
    }, [movieId])

    return (
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
        )
}

export default Reviews