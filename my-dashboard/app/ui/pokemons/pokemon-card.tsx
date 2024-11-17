'use client';

import Link from "next/link";
import Image from "next/image";
import { SimplePokemon } from "@/app/interfaces";
import { IoArrowForwardOutline, IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { toggleFavorite } from "@/app/store/pokemons/pokemons-slice";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector( state => !!state.pokemons.favorites[id] );
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center w-60 bg-white border border-gray-200 rounded-lg shadow pt-5">
      <Image
        key={id}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        width={100}
        height={100}
        alt={name}
        priority={false}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center capitalize">{name}</h5>
        <Link href={`pokemon/name/${name}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Read more
          <IoArrowForwardOutline className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
        </Link>
      </div>
      <div className="flex items-center justify-center w-full border-t border-gray-300">
        <button onClick={ () => dispatch( toggleFavorite(pokemon) ) } className="p-2 hover:bg-gray-100 flex items-center">
          {
            isFavorite 
              ? <IoHeart className="w-8 h-8 text-red-600" />
              : <IoHeartOutline className="w-8 h-8 text-red-600" />
          }
        </button>
        <div className="ml-2">
          <p className="text-sm font-medium text-gray-800 leading-none">
            {
              isFavorite 
                ? 'Favorite'
                : 'Not a favorite'
            }
          </p>
        </div>
      </div>
    </div>
  )
}