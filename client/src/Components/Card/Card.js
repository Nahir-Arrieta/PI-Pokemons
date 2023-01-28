import { Link } from "react-router-dom";
import "./Card.css"

const Card = ({ name, image, types, id }) => {
  return (
    <div className="ContainerCard">
      <Link to={`/home/${id}`}>
        <img src={image} alt={name} className="ImageCard"/>
        <h1>{name}</h1>
      </Link>
      <h3 className="TypesCard">
        {types?.map((type, index) => {
          return <p key={index}>{type.name ? type.name : type}</p>;
        })}
      </h3>
    </div>
  );
};

export default Card;
