import axios from "axios";

// Aca deben declarar las variables donde tengan el action types.
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const DETAIL_POKEMON = "DETAIL_POKEMON";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
// export const GET_TYPES = "GET_TYPES";

export const getAllPokemons = () => async (dispatch) => {
  const response = await axios.get("http://localhost:3001/pokemons");
  try {
    const responseBd = await axios.get("http://localhost:3001/pokemonsdb");
    const responseAll = response.data.concat(responseBd.data);
    dispatch({
      type: GET_ALL_POKEMONS,
      payload: responseAll,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_POKEMONS,
      payload: response.data,
    });
  }
};

export const postCreatePokemon = (create) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3001/pokemons", create);
    dispatch({
      type: CREATE_POKEMON,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonDetail = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
    dispatch({
      type: DETAIL_POKEMON,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const clearDetail = () => {
  return {
    type: CLEAR_DETAIL,
    payload: [],
  };
};
