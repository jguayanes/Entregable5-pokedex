import axios from "axios";

export const getAllPokemons = async () => {
  const URl = "https://pokeapi.co/api/v2/pokemon?limit=1281";
  const { data } = await axios.get(URl);
  return data.results;
};

export const getAllTypes = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/type");
  return data.results;
};

export const getPokemonsByType = async (pokemonType) => {
  const url = `https://pokeapi.co/api/v2/type/${pokemonType}/`;
  const { data } = await axios.get(url);
  const formatPokemon = data.pokemon.map(({ pokemon }) => pokemon);
  return formatPokemon;
};

export const getPokemonByUrl = async (pokemonUrl) => {
  const { data } = await axios.get(pokemonUrl);
  const pokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes(data.types),
    stats: formStast(data.stats),
    image:
      data.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
  };
  return pokemon;
};

export const getPokemonById = async (idPokemon) => {
  const url1 = `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`;
  const { data } = await axios.get(url1);
  const pokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes(data.types),
    stats: formStast(data.stats),
    image:
      data.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
    weight: data.weight,
    height: data.height,
    abilities: formatAbilities(data.abilities),
    moves: formatMoves(data.moves),
  };
  return pokemon;
};

export const getAllMoves = async () => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/move/`);
  return data.results;
};

const formatMoves = (moves) => {
  return moves.map((move) => move.move.name);
};

const formatAbilities = (abilities) => {
  return abilities.map((ability) => ability.ability.name);
};

const formatTypes = (types) => {
  return types.map((type) => type.type.name);
};

const formStast = (stats) => {
  return stats.map((stat) => ({
    name: stat.stat.name,
    value: stat.base_stat,
  }));
};

export const joinPokemonTypes = (types = []) => {
  return types.slice(0, 2).join(" / ");
};
