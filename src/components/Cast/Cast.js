import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchCreditsMovie } from "services/api"
import toast, { Toaster } from 'react-hot-toast';

const defaultImg = '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>'

const Cast = () => {
const {movieId} = useParams()

const [cast, setCast] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)

useEffect(() => {
        if (!movieId) {
            return;
          }

        const getCast = async () => {
    try {
        setLoading(true)
        setError(false);
        const data = await fetchCreditsMovie(movieId)
        setCast(data.cast)
        console.log(data.cast);
    } catch (error) {
        setError(true);
          toast.error('Sorry, something went wrong, please try again!',{
            duration: 4000,
        });
    } finally {
        setLoading(false)
        setError(false);
    }}
    
    getCast()
    
    }, [movieId])

    return (
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
        )
}

export default Cast