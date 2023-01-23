const { Router } = require("express");
const { getTypes } = require("./controllerstypes.js");
const { Pokemon, Types } = require("../db");
const router = Router();

router.get("/types", async function (req, res) {
  try {
    await getTypes();
    const typesdb = await Types.findAll();
    res.status(200).send(typesdb);
  } catch (error) {
    res.status(404).send({ message: "No se encontraron tipos" });
  }
});

module.exports = router;
