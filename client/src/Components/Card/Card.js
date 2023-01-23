import { Link } from "react-router-dom";

const Card = ({ name, image, types, id }) => {
  return (
    <div>
      <Link to={`/home/${id}`}>
        <img src={image} alt={name} />
        <h1>Nombre: {name}</h1>
      </Link>
      <h2>
        {types?.map((type, index) => {
          return <p key={index}>{type.name ? type.name : type}</p>;
        })}
      </h2>
    </div>
  );
};

export default Card;
