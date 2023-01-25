// import { useEffect, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { filterByTypes, getPokemonsApi, getPokemonTypes, pokemonBd } from "../../Redux/actions";

const Filters = ({setOrder}) => { 
    const Types = useSelector((state) => state.types);
    const dispatch = useDispatch();
    
    const handleSelect = (event) => {
        const value = event.target.value
        dispatch(filterByTypes(value))
        setOrder(value)
    }
    const handleCheckboxDb = () =>{
      
      dispatch(pokemonBd())

    }
    const handlePokemonsApi = () => {
        dispatch(getPokemonsApi())
    }
    
    useEffect(()=> {
     dispatch(getPokemonTypes())
    },[dispatch])

    return (
        <div>
        <label> Filter:</label>
        <select value="default" onChange={handleSelect}>
            <option value="default" disabled>Pokemons Types</option>
            {
                Types?.map((type,index) =>{
                    return <option key= {index}
                    value= {type.name}>{type.name}</option>
                })
            }
        </select>
        <div>
            <button type="checkbox" onClick={handleCheckboxDb}>Created by you</button>
        </div>
        <div>
            <button type="checkbox" onClick={handlePokemonsApi}>Created by PokeApi</button>
        </div>
        </div>
    );
  
}

export default Filters;