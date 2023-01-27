import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { pokemonSearch } from "../../Redux/actions";

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
    <div>
      <input
        type="search"
        onChange={(event) => handleSearch(event)}
        placeholder="Search..."
      />
      <button type="submit" onClick={(event) => handleSubmit(event)}>
        search
      </button>
    </div>
  );
};

export default Search;
