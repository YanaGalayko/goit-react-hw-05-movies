const SearchBar = ({onSubmit}) => {
    return (
        <form onSubmit={onSubmit}>
            <input 
             type="text"
             name="query"
             autoComplete="off"
             autoFocus
             placeholder="Search movies"/>
            <button>Search</button>
        </form>
    )

}

export default SearchBar