import { useSearchParams } from "react-router-dom";
import { SearchInput, SearchBtn } from "./SearchBarStyled";

const SearchBar = ({onSubmit}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchMovies = searchParams.get('searchMovies')

    const updateQueryString = e => {
        const searchValue = e.target.value
        if(searchValue === '') {
            return setSearchParams({})
        }
        setSearchParams({searchMovies: searchValue})
    }

    return (
        <form onSubmit={onSubmit} onChange={updateQueryString}>
            <SearchInput 
             type="text"
             name="query"
             defaultValue={searchMovies}
             autoComplete="off"
             autoFocus
             placeholder="Search movies"/>
            <SearchBtn>Search</SearchBtn>
        </form>
    )

}

export default SearchBar