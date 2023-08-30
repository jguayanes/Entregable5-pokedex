import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavbarPokeball from "../components/layout/NavbarPokeball";
import MovesList from "../components/pokemonDetail/MovesList";
import StatBarList from "../components/pokemonDetail/StatBarList";
import { getAllMoves, getPokemonById } from "../services/pokemons";
import { bgStylePokemonByTypes } from "../shared/pokemons";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [moves, setMoves] = useState([]);

  const { idPokemon } = useParams();

  useEffect(() => {
    getPokemonById(idPokemon)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getAllMoves()
      .then((moves) => setMoves(moves))
      .catch((err) => console.log(err));
  }, []);
  return (
    <main className="grid gap-3">
      <div>
        <NavbarPokeball />
      </div>
      <article className="grid justify-center px-3">
        <article className="w-[min(100%,_400px)] sm:w-[600px]">
          <header
            className={`grid justify-center items-center ${
              bgStylePokemonByTypes[pokemonData?.types[0]]
            }`}
          >
            <div className="sm:grid justify-center items-center">
              <img src={pokemonData?.image} alt="" />
            </div>
          </header>
          <section className="grid justify-center place-items-center">
            <span className="text-[#416460] font-bold sm:text-2xl">
              #{pokemonData?.id}
            </span>
            <div className="text-center">
              <h2 className="text-xl text-[#416460] font-bold">
                {pokemonData?.name}
              </h2>
            </div>
            <div className="flex gap-3">
              <div className="grid items-center place-items-center">
                <h4 className="font-bold">Weight</h4>
                {pokemonData?.weight}
              </div>
              <div className="grid items-center place-items-center">
                <h4 className="font-bold">Height</h4>
                {pokemonData?.height}
              </div>
            </div>
            <section className="flex gap-5 justify-center items-center">
              <div className="grid items-center place-items-center">
                <h2 className="text-[#416460] font-semibold sm:text-lg">
                  Type
                </h2>
                <div className="flex gap-2 ">
                  <div className="text-white bg-sky-300 w-[70px] text-center">
                    {pokemonData?.types[0]}
                  </div>
                  <div className="text-white bg-purple-900 w-[70px] text-center">
                    {pokemonData?.types[1]}
                  </div>
                </div>
              </div>
              <div className="grid items-center place-items-center">
                <h2 className="text-[#416460] font-semibold sm:text-lg">
                  Abilities
                </h2>
                <div className="flex gap-2 ">
                  <div className="font-semibold border">
                    {pokemonData?.abilities[0]}
                  </div>
                  <div className="font-semibold border">
                    {pokemonData?.abilities[1]}
                  </div>
                </div>
              </div>
            </section>
          </section>
          <StatBarList stats={pokemonData?.stats} />
        </article>
        <MovesList moves={moves} />
      </article>
      <div className="flex justify-center items-center">
        <img className="w-10" src="/images/mapa.png" alt="" />
        <Link className="font-bold text-xl" to="/pokedex">
          Go Back
        </Link>
      </div>
    </main>
  );
};

export default PokemonDetail;
