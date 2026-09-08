import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2";

export const getPokemon = async () => {
  const response = await axios.get(
    `${API_URL}/pokemon?limit=30&offset=0`
  );

  const pokemonData = await Promise.all(
    response.data.results.map(async (pokemon) => {
      const detailResponse = await axios.get(pokemon.url);

      const data = detailResponse.data;

      return {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        types: data.types.map(
          (type) => type.type.name
        ),
        height: data.height,
        weight: data.weight,
      };
    })
  );

  return pokemonData;
};



