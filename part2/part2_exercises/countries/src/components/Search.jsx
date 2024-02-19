const Search = ({newSearch, handleSearch}) => {
    return(
        <div>
            Find countries <input 
            value={newSearch}
            onChange={handleSearch}
            />
        </div>
    )
}

export default Search
