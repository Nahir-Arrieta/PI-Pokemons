import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { pokemonSearch } from "../../Redux/actions";
import SearchIcon from '@mui/icons-material/Search';
import "./Search.css"

const Search = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSearch = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(pokemonSearch(name));
    setName("");
  };
  useEffect(() => {}, [name]);
  return (
    <form className="form-display">
      <div className="form-group">
      <SearchIcon className="searchIcon"/>
        <input
            type="search"
            onChange={(event) => handleSearch(event)}
            placeholder="Search..."
          />
      </div>
        <button type="submit" onClick={(event) => handleSubmit(event)} className= "btn-search">
            search
        </button>        
    </form>
  
  );
};

export default Search;
