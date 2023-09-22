import { useSearchParams } from "react-router-dom";
import { SearchInput, SearchBtn } from "./SearchBarStyled";

const SearchBar = ({onSubmit}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchId = searchParams.get('searchId')

    const updateQueryString = evt => {
        const queryValue = evt.target.value
        if(queryValue === '') {
            return setSearchParams({})
        }
        setSearchParams({searchId: queryValue})
    }

    return (
        <form onSubmit={onSubmit} onChange={updateQueryString}>
            <SearchInput 
             type="text"
             name="query"
             defaultValue={searchId}
             autoComplete="off"
             autoFocus
             placeholder="Search movies"/>
            <SearchBtn>Search</SearchBtn>
        </form>
    )

}

export default SearchBar