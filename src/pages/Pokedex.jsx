import { useState } from "react";
import NavbarPokeball from "../components/layout/NavbarPokeball";
import PokemonList from "../components/pokedex/PokemonList";
import Pagination from "../components/pokedex/Pagination";
import UsePokedex from "../hooks/UsePokedex";
import { paginateData } from "../utils/pagination";

const Pokedex = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    name,
    pokemonName,
    setPokemonName,
    pokemonType,
    setPokemonType,
    handleChange,
    pokemonsByName,
    types,
  } = UsePokedex();

  const { itemsInCurrentPage, lastPage, pagesInCurrentBlock } = paginateData(
    pokemonsByName,
    currentPage
  );

  return (
    <main className="grid gap-3">
      <NavbarPokeball />
      <section className="grid gap-3 px-3">
        <p className="font-semibold text-center sm:text-2xl">
          <span className="text-[#fe1936] font-bold sm:text-2xl">
            Welcome {name},
          </span>{" "}
          here you can find your favorite pokemon.
        </p>
        <form className="flex drop-shadow-lg gap-3 sm:flex sm:justify-around sm:text-2xl">
          <div>
            <input
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              placeholder="Search pokemon ..."
              type="text"
              className="h-[35px]"
            />
          </div>

          <select
            className="h-[35px]"
            value={pokemonType}
            onChange={handleChange(setPokemonType)}
          >
            <option value="">All pokemons</option>
            {types?.map((type) => (
              <option key={type.name}>{type.name}</option>
            ))}
          </select>
        </form>
      </section>

      <PokemonList pokemons={itemsInCurrentPage} />
      <Pagination
        lastPage={lastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </main>
  );
};

export default Pokedex;
