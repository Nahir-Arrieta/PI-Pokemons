const axios = require("axios");
const { Pokemon, Types } = require("../db");

const getPokemonsApi = async function () {
  const pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=40");
  const allUrl = pokemon.data.results.map((pokemon) => pokemon.url);
  promises = await Promise.all(allUrl.map((url) => axios.get(url)));
  const pokemons = promises.map((pokemon) => {
    return {
      name: pokemon.data.name,
      image: pokemon.data.sprites.other.dream_world.front_default,
      types: pokemon.data.types.map((type) => type.type.name),
      attack: pokemon.data.stats[1].base_stat,
      id: pokemon.data.id,
    };
  });
  return pokemons;
};

const getPokemonsDb = async function () {
  const pokemons = await Pokemon.findAll({
    include: {
      model: Types,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  if (pokemons.length === 0) throw new Error();
  return pokemons;
};
const getPokemonId = async function (id) {
  if (id === null) throw new Error();
  else
    try {
      if (id !== null) {
        const pokemonId = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        const pokemonDetail = {
          image: pokemonId.data.sprites.other.dream_world.front_default,
          name: pokemonId.data.name,
          types: pokemonId.data.types.map((type) => type.type.name),
          id: pokemonId.data.id,
          status: {
            hp: pokemonId.data.stats[0].base_stat,
            attack: pokemonId.data.stats[1].base_stat,
            defense: pokemonId.data.stats[2].base_stat,
            speed: pokemonId.data.stats[5].base_stat,
          },
          height: pokemonId.data.height,
          weight: pokemonId.data.weight,
        };
        return pokemonDetail;
      }
    } catch (error) {
      return "No se encontro el pokemon";
    }
};

const getPokemonIdbyDb = async function (id) {
  if (id) {
    const pokemonId = await Pokemon.findByPk(id, {
      include: {
        model: Types,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return pokemonId;
  }
};
const getPokemonName = async function (name) {
  try {
    if (name !== null) {
      const pokemonFetch = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      const pokemonName = {
        name: pokemonFetch.data.name,
        image: pokemonFetch.data.sprites.other.dream_world.front_default,
        types: pokemonFetch.data.types.map((type) => type.type.name),
        id: pokemonFetch.data.id
      };
      return pokemonName;
    }
  } catch (error) {
    return `No hay ningun pokemon con ese nombre`;
  }
};

const getPokemonNameDb = async function (name) {
  const pokemonNameDb = await Pokemon.findAll({
    where: { name },
    include: {
      model: Types,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return pokemonNameDb;
};

module.exports = {
  getPokemonsApi,
  getPokemonsDb,
  getPokemonId,
  getPokemonIdbyDb,
  getPokemonName,
  getPokemonNameDb,
};
