import { useState } from "react";
import { useDispatch } from "react-redux";
import { postCreatePokemon } from "../../Redux/actions";
// import Select from "react-select";

const Form = () => {
  const dispatch = useDispatch();
  const [create, setCreate] = useState({
    name: "",
    image: "",
    types: [],
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
  });
  const [error, setError] = useState({});

  function validate(create) {
    let err = {};
    if (!create.name || typeof create.name !== "string") {
      err.name = "Please type a name!";
    } else if (!create.hp || create.hp < 0 || create.hp > 500) {
      err.hp = "Please enter a value between 0 and 500!";
    } else if (!create.image) {
      err.image = "please enter an image";
    } else if (!create.attack || create.attack < 0 || create.attack > 300) {
      err.attack = "Please enter a value between 0 and 300!";
    } else if (!create.defense || create.defense < 0 || create.defense > 300) {
      err.defense = "Please enter a value between 0 and 300!";
    } else if (!create.speed || create.speed < 0 || create.speed > 300) {
      err.defense = "Please enter a value between 0 and 300!";
    } else if (!create.height || create.height < 0 || create.height > 200) {
      err.height = "Please enter a value between 0 and 200!";
    } else if (!create.weight || create.weight < 0 || create.weight > 500) {
      err.weight = "Please enter a value between 0 and 500!";
    }
    return err;
  }

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setCreate({
      ...create,
      [property]: value,
    });
    setError(
      validate({
        ...create,
        [property]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postCreatePokemon(create));
    alert("Pokemon creado");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={create.name}
        />
        <span>{error.name && <p>{error.name}</p>}</span>
        <label>Image:</label>
        <input
          type="text"
          name="image"
          onChange={handleChange}
          value={create.image}
        />
        <span>{error.image && <p>{error.image}</p>}</span>
        {/* <label>Types:</label>
        <input
          type="text"
          name="type"
          onChange={handleChange}
          value={create.types}
        /> */}
        <label>Hp:</label>
        <input
          type="number"
          name="hp"
          onChange={handleChange}
          value={create.hp}
        />
        <span>{error.hp && <p>{error.hp}</p>}</span>
        <label>Attack:</label>
        <input
          type="number"
          name="attack"
          onChange={handleChange}
          value={create.attack}
        />
        <span>{error.attack && <p>{error.attack}</p>}</span>
        <label>Defense:</label>
        <input
          type="number"
          name="defense"
          onChange={handleChange}
          value={create.defense}
        />
        <span>{error.defense && <p>{error.defense}</p>}</span>
        <label>Speed:</label>
        <input
          type="number"
          name="speed"
          onChange={handleChange}
          value={create.speed}
        />
        <span>{error.speed && <p>{error.speed}</p>}</span>
        <label>Height:</label>
        <input
          type="number"
          name="height"
          onChange={handleChange}
          value={create.height}
        />
        <span>{error.height && <p>{error.height}</p>}</span>
        <label>Weight:</label>
        <input
          type="number"
          name="weight"
          onChange={handleChange}
          value={create.weight}
        />
        <label>Types:</label>
        <span>{error.weight && <p>{error.weight}</p>}</span>
        <button type="submit">CREATE POKEMON</button>
      </form>
    </div>
  );
};

export default Form;
