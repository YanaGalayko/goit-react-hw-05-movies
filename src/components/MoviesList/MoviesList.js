import { useLocation } from 'react-router-dom';
import { List, MovieLink } from './MoviesListStyled';

const MoviesList = ({movies}) => {
    const location = useLocation()
    
    return (
        <ul> 
            {movies.map(({id, title}) => {
        return (
            <List key={id}>
                <MovieLink to={`/movies/${id}`} state={{ from: location }}>{title}</MovieLink>
            </List>
        )
            })}
        </ul>
    )
}

export default MoviesList
