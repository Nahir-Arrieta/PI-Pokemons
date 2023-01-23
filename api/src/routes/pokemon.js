const { Router } = require("express");
const {
  getPokemonsApi,
  getPokemonsDb,
  getPokemonId,
  getPokemonIdbyDb,
  getPokemonName,
  getPokemonNameDb,
} = require("./controllerpokemon.js");
const { Pokemon, Types } = require("../db");
const router = Router();

router.get("/pokemons", async function (req, res) {
  try {
    const pokemons = await getPokemonsApi();
    res.status(200).send(pokemons);
  } catch (error) {
    res.status(404).send({ message: "No se encontraron pokemones" });
  }
});
router.get("/pokemonsdb", async function (req, res) {
  try {
    const pokemonsdb = await getPokemonsDb();
    res.status(200).send(pokemonsdb);
  } catch (error) {
    res
      .status(404)
      .send({ message: "No se encontraron pokemones en la base de datos" });
  }
});
router.get("/pokemons/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const pokemonsId = await getPokemonId(id);
    if (pokemonsId === "No se encontro el pokemon") {
      const pokemonsIdDb = await getPokemonIdbyDb(id);
      res.status(200).send(pokemonsIdDb);
    } else {
      res.status(200).send(pokemonsId);
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

router.get("/pokemon", async function (req, res) {
  try {
    const { name } = req.query;
    const pokemonName = await getPokemonName(name);
    if (pokemonName === `No hay ningun pokemon con ese nombre`) {
      const pokemonNameDb = await getPokemonNameDb(name);
      res.status(200).send(pokemonNameDb);
    } else {
      res.status(200).send(pokemonName);
    }
  } catch (error) {
    res.status(404).send({ message: "El pokemon no existe" });
  }
});
router.post("/pokemons", async function (req, res) {
  try {
    const { name, image, hp, attack, defense, speed, height, weight, types } =
      req.body;
    const pokemon = await Pokemon.create({
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
    });

    const allTypes = await Types.findAll({
      where: {
        name: types,
      },
    });
    await pokemon.addTypes(allTypes.map((type) => type.id));
    res.status(200).send("Pokemon creado");
  } catch (error) {
    res.status(404).send({ message: "No se pudo crear el pokemon" });
  }
});

module.exports = router;
