import { useSearchParams } from "react-router-dom";

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
            <input 
             type="text"
             name="query"
             defaultValue={searchId}
             autoComplete="off"
             autoFocus
             placeholder="Search movies"/>
            <button>Search</button>
        </form>
    )

}

export default SearchBar