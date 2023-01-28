import { Link } from "react-router-dom";
import "./Card.css"

const Card = ({ name, image, types, id }) => {
  return (
    <div className="ContainerCard">
      <div className="card">
      <Link to={`/home/${id}`} className= "linkCard">
        <img src={image} alt={name} className="ImageCard"/>
        <h1 className="poke-name">{name}</h1>
      </Link>
      <div  className="TypesCard">
        {types?.map((type, index) => {
          return <span key={index}>{type.name ? type.name : type}</span>;
        })}
      </div>
      </div>
    </div>
  );
};

export default Card;
