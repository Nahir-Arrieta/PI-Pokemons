import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import Logo from "../Image/logo-pokemon.png"
import HomeIcon from '@mui/icons-material/Home';

const NavBar = () => {
  return (
    <div className={style.mainContainer}>
      <img className={style.imageNavBar} src={Logo} alt="Logo"/> 
      <Link to="/Home" className={style.Links}><HomeIcon/></Link>
      <Link to="/Create" className={style.Links}>CREATE</Link>
    </div>
  );
};

export default NavBar;
