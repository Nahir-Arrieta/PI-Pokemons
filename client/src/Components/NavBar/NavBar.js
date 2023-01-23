import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.mainContainer}>
      <Link to="/Home">HOME</Link>
      <Link to="/Create">CREATE</Link>
    </div>
  );
};

export default NavBar;
