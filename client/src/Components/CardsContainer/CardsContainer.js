import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../Redux/actions/index";
import Card from "../Card/Card";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);
  return (
    <div>
      {pokemons?.map((pokemon, index) => {
        return (
          <Card
            key={index}
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
            id={pokemon.id}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
