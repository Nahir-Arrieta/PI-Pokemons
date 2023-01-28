// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { filterByTypes, getPokemonsApi, getPokemonTypes, pokemonBd } from "../../Redux/actions";
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';
import "./Filters.css"

const Filters = ({setOrder}) => { 
    const Types = useSelector((state) => state.types);
    const dispatch = useDispatch();
    const [checked, setChecked] = useState("")
    const [active, setActive] = useState("")
    
    const handleCheckbox = (event) => {
        const value = event.target.value
        setChecked(value);
        dispatch(filterByTypes(value))
        setOrder(value)
    }
    
    const handleCheckboxDb = () =>{
      dispatch(pokemonBd())
    }

    const handlePokemonsApi = () => {
        dispatch(getPokemonsApi())
    }

    const activeFilter = () =>{
        active === "active" ? setActive("") : setActive("active")
    }
    
    useEffect(()=> {
     dispatch(getPokemonTypes())
    },[dispatch])

    return (
        <div className="container-filter-container">
            <div className="icon-filter" onClick={activeFilter}>
            <FormatListBulletedSharpIcon/>
            <span>Filter</span>
            </div>
        {/* <select value="default" onChange={handleSelect}>
            <option value="default" disabled>Pokemons Types</option>
            {
                Types?.map((type,index) =>{
                    return <option key= {index}
                    value= {type.name}>{type.name}</option>
                })
            }
        </select> */}
        <div className={active === "active"? "container-filter active": "container-filter"} >
            <div className="filter-by-type">
                {
                    Types?.map((type,index) =>{
                        return (
                            <div key={index} className="group-type">
                                <input type="checkbox" value={type.name} onChange={handleCheckbox} checked={checked === `${type.name}` ? true : false}/>
                                <label>{type.name}</label>
                            </div>
                        )
                    })
                    
                }
                <div className="group-type">
                    <input type="checkbox" value="all" onChange={handleCheckbox} checked={checked === "all" ? true : false}/>
                    <label>All</label>
                </div>
            </div>
        </div>
       
        <div>
            <button onClick={handleCheckboxDb}>Created by you</button>
        </div>
        <div>
            <button onClick={handlePokemonsApi}>Created by PokeApi</button>
        </div>
        </div>
    );
  
}

export default Filters;