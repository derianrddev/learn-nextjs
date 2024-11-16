import { Metadata } from "next";
import { PokemonGrid } from "@/app/ui";

export const metadata: Metadata = {
  title: 'Favorites',
  description: 'My Favorites Pokemons',
};

export default async function FavoritePage() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-4">
        <h1 className="text-4xl my-2">Favorites Pokemons</h1>
        <span className="bg-blue-800 text-blue-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded h-5">Global State</span>
      </div>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}