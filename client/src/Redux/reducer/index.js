import {
  GET_ALL_POKEMONS,
  CREATE_POKEMON,
  DETAIL_POKEMON,
  CLEAR_DETAIL,
  GET_TYPES,
  ORDERING_BY_NAME,
  FILTER_TYPES,
  POKEMON_BD,
  POKEMON_API,
  POKEMON_SEARCH,
} from "../actions";

const initialState = {
  pokemons: [],
  pokemonsCopy: [],
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
        pokemonsCopy: action.payload,
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
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case ORDERING_BY_NAME:
      if (action.payload === "asc") {
        return {
          ...state,
          pokemons: state.pokemons.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          }),
        };
      }
      if (action.payload === "desc") {
        return {
          ...state,
          pokemons: state.pokemons.sort((a, b) => {
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 0;
          }),
        };
      }
      if (action.payload === "attack-asc") {
        return {
          ...state,
          pokemons: state.pokemons.sort((a, b) => {
            if (a.attack > b.attack) {
              return -1;
            }
            if (a.attack < b.attack) {
              return 1;
            }
            return 0;
          }),
        };
      }
      if (action.payload === "attack-desc") {
        return {
          ...state,
          pokemons: state.pokemons.sort((a, b) => {
            if (a.attack < b.attack) {
              return -1;
            }
            if (a.attack > b.attack) {
              return 1;
            }
            return 0;
          }),
        };
      }
      break;
    case FILTER_TYPES:
      return {
        ...state,
        pokemons: state.pokemonsCopy.filter(
          (pokemon) =>
            pokemon.types.includes(action.payload) ||
            pokemon.types.map((type) => type.name).includes(action.payload)
        ),
      };

    case POKEMON_BD:
      return {
        ...state,
        pokemons: action.payload,
        pokemonsCopy: action.payload,
      };

    case POKEMON_API:
      return {
        ...state,
        pokemons: action.payload,
        pokemonsCopy: action.payload,
      };
    case POKEMON_SEARCH:
      console.log(action.payload);
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
