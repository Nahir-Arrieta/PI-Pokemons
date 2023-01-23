import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonDetail, clearDetail } from "../../Redux/actions";

const Detail = () => {
  const dispatch = useDispatch();
  const pokemonsDetail = useSelector((state) => state.pokemonDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPokemonDetail(id));
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, id]);

  return (
    <div>
      <h1>Detail</h1>
      {pokemonsDetail && (
        <div>
          <img src={pokemonsDetail.image} alt={pokemonsDetail.name} />

          <h2>{pokemonsDetail.name}</h2>

          <div>
            <label>Type:</label>
            {pokemonsDetail.types?.map((type, index) => {
              return <p key={index}>{type.name ? type.name : type}</p>;
            })}
          </div>
        </div>
      )}
      <div>
        {pokemonsDetail.status ? (
          <div>
            <p>hp: {pokemonsDetail.status.hp}</p>
            <p>attack: {pokemonsDetail.status.attack}</p>
            <p>defense: {pokemonsDetail.status.defense}</p>
            <p>speed: {pokemonsDetail.status.speed}</p>
          </div>
        ) : (
          <div>
            <p>hp: {pokemonsDetail.hp}</p>
            <p>attack: {pokemonsDetail.attack}</p>
            <p>defense: {pokemonsDetail.defense}</p>
            <p>speed: {pokemonsDetail.speed}</p>
          </div>
        )}
      </div>
      <div>
        {pokemonsDetail.height ? <p>height: {pokemonsDetail.height}</p> : null}
      </div>
      <div>
        {pokemonsDetail.weight ? <p>weight: {pokemonsDetail.weight}</p> : null}
      </div>
    </div>
  );
};

export default Detail;
