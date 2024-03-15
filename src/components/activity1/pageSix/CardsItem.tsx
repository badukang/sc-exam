import useFetchPokemon from "@/hooks/pokemon/useFetchPokemon";
import { Card, CardHeader, Grid, Typography } from "@mui/material";
import { capitalize } from "lodash";
import Image from "next/image";

const CardsItem = ({ data }: any) => {
  //bad practice but cant find api that returns picture, id, name, within the list
  const { name, avatar, height, weight, hp } = useFetchPokemon({
    url: data?.url,
  });

  return (
    <div className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-56 p-2">
      <div className="shadow-md border-4">
        <div className="relative flex items-center p-2">
          <Image
            className="flex-none"
            width="25"
            height="25"
            alt={name}
            src={avatar?.sub}
          />
          <p className="grow px-2">{capitalize(data?.name)}</p>
          <p className="flex-none">HP: {hp}</p>
        </div>
        <div className="relative w-full h-56">
          <Image fill alt={name} src={avatar?.main} />
        </div>
        <div className="p-2">
          <div>height: {height}</div>
          <div>weight: {weight}</div>
        </div>
      </div>
    </div>
  );
};

export default CardsItem;
