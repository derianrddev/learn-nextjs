import Image from "next/image";
import { PokemonsResponse, SimplePokemon } from "../../interfaces";
import { PokemonGrid } from "@/app/ui";

const getPokemons = async(limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
                      .then(response => response.json());

  const pokemons = data.results.map( pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-4">
        <h1 className="text-4xl my-2">List of Pokemons</h1>
        <span className="bg-blue-800 text-blue-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded h-5">Static</span>
      </div>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}