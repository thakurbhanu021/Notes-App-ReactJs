import { MdSearch } from "react-icons/md";

const Search=(props)=>{
    const handleSearch=(event)=>{
        props.handleSearch(event.target.value);
    }

    return <div className="search">
        <MdSearch className='search-icon' size='1.3em'/>
        <input type="text" placeholder="type to search..." onChange={handleSearch}/>
    </div>
}
export default Search;