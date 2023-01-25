// import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import {ordering} from "../../Redux/actions/index";

const Orderings = ({setOrder}) => {
    const dispatch = useDispatch();
    const handleOrdering = (e) => {
        dispatch(ordering(e.target.value))
        setOrder(e.target.value)
    }

    return (
        <div className="orderings">
        <label>Order by:</label>
        <select value="default" onChange={handleOrdering}>
            <option value="default" disabled >Sort</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
            <option value="attack-asc">Attack Ascending</option>
            <option value = "attack-desc">Attack Descending</option>
        </select>
        </div>
    );
}

export default Orderings;