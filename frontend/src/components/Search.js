const SearchBar = () => (
    <form className='search-bar' action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search for music on YouTube</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search for music on YouTube"
            name="s" 
        />
        <span onClick='' className='add-from-youtube'>Add</span>
    </form>
);

export default SearchBar;
