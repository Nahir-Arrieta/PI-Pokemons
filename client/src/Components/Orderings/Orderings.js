// import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ordering } from "../../Redux/actions/index";

const Orderings = ({ setOrder, setRestart, restart }) => {
  const dispatch = useDispatch();
  const handleOrdering = (e) => {
    dispatch(ordering(e.target.value));
    setOrder(e.target.value);
  };

  const handleRestart = () => {
    setRestart(!restart);
  };

  return (
    <div>
      <div className="dropdown">
         <div className= "dropdown-select">
          {/* <label>Order by:</label> */}
           <select value="default" onChange={handleOrdering}>
            <option value="default" disabled>
              Order by
            </option>
             <div className="selectItem">
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
              <option value="attack-asc">Attack Ascending</option>
              <option value="attack-desc">Attack Descending</option>
             </div>
          </select>
        </div>
      </div>
        <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default Orderings;
