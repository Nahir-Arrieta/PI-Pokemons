import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../Redux/actions/index";
import Card from "../Card/Card";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import Orderings from "../Orderings/Orderings";
import Filters from "../Filters/Filters";
import Search from "../Search/Search";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const [order, setOrder] = useState([]);
  const [restart, setRestart] = useState(false); // para reiniciar el ordenamiento
  const [currentPage, setCurrentPage] = useState(1); // pagina actual
  const [postsPerPage, setPostsPerPage] = useState(12); // cantidad de posts por pagina
  const lastPostIndex = currentPage * postsPerPage; // indice del ultimo post de la pagina
  const firstPostIndex = lastPostIndex - postsPerPage; // indice del primer post de la pagina
  const currentPosts = pokemons.slice(firstPostIndex, lastPostIndex); // posts de la pagina actual

  useEffect(() => {
    dispatch(getAllPokemons());
    setPostsPerPage(12);
  }, [dispatch, restart]);

  useEffect(() => {}, [order]);

  return (
    <div>
      <Pagination
        pokemons={pokemons.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
      <Orderings
        setOrder={setOrder}
        setRestart={setRestart}
        restart={restart}
      />
      <Filters setOrder={setOrder} />
      <Search />
      {currentPosts?.map((pokemon, index) => {
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
