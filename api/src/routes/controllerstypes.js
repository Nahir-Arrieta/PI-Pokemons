const axios = require("axios");
const { Pokemon, Types } = require("../db");

const getTypes = async function () {
  const types = await axios.get("https://pokeapi.co/api/v2/type");
  const alltypes = types.data.results.map((type) => type.name);
  alltypes.forEach(async (type) => {
    const typesdb = await Types.findOrCreate({
      where: {
        name: type,
      },
    });
  });
};

module.exports = {
  getTypes,
};
