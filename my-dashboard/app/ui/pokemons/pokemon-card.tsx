import Link from "next/link";
import Image from "next/image";
import { SimplePokemon } from "@/app/interfaces";
import { IoArrowForwardOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

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
        <Link href={`pokemon/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Read more
          <IoArrowForwardOutline className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
        </Link>
      </div>
    </div>
  )
}