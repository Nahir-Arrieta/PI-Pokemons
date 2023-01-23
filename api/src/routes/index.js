const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemons = require("./pokemon.js");
const types = require("./types.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(pokemons);
router.use(types);

module.exports = router;
