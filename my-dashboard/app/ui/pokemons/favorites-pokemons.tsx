'use client';

import { useAppSelector } from "@/app/store";
import { PokemonGrid } from "./pokemon-grid";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritesPokemons = () => {
  const favoritePokemons = useAppSelector(state => Object.values(state.pokemons.favorites));

  return (
    <>
      {
        favoritePokemons.length === 0
          ? (<NoFavorites />)
          : (<PokemonGrid pokemons={favoritePokemons} />)
      }
    </>
  )
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center ">
      <IoHeartOutline size={100} className="text-red-500" />
      <h1 className="text-2xl">No favorites</h1>
    </div>
  )
}