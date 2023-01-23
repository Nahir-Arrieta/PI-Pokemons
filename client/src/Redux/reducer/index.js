import {
  GET_ALL_POKEMONS,
  CREATE_POKEMON,
  DETAIL_POKEMON,
  CLEAR_DETAIL,
} from "../actions";

const initialState = {
  pokemons: [],
  pokemonDetail: [],
  pokemonCreate: [],
  types: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case CREATE_POKEMON:
      return {
        ...state,
        pokemonCreate: action.payload,
      };
    case DETAIL_POKEMON:
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
