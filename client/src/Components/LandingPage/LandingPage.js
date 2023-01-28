import { Link } from "react-router-dom"
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="containerLanding">
      <button className="buttonLanding">
        <Link to="/home">HOME</Link>
      </button>
    </div>
  );
};

export default LandingPage;
