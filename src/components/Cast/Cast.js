import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchCreditsMovie } from "services/api"
import toast, {Toaster} from 'react-hot-toast';
import Loader from "components/Loader/Loader";

const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

const Cast = () => {
const {movieId} = useParams()

const [cast, setCast] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)

useEffect(() => {
        if (!movieId) {
            return;
          }
        const controller = new AbortController()

        const getCast = async () => {
    try {
        setLoading(true)
        setError(false);
        const data = await fetchCreditsMovie(movieId, {
          signal: controller.signal
        })
        setCast(data.cast)
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
    
    getCast()

    return () => {
      controller.abort()
  }
    
    }, [movieId])

    return (
      <>
      {loading && <Loader/>} 
      {!loading && <>
        <ul>
        {cast.map(({ profile_path, name, character, id }) => {
        return (   
        <li key={id}>
        <img
          width="300px"
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : defaultImg
          }
          alt={name}
         />
            <h3>{name}</h3>
            <p>Character: {character}</p>
        </li>   
        )
       })}     
        </ul>
      </>} 
        {error && !loading && toast.error('Sorry, something went wrong, please reload the page!',{
          duration: 4000,
       })}
       <Toaster position="top-right" reverseOrder={false}/>
      </>
       
        )
}

export default Cast