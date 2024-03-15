"use client";
import _ from "lodash";
import { useEffect, useState } from "react";

type Props = {
  url: string;
};

const useFetchPokemon = ({ url }: Props) => {
  const [pokemon, setPokemon] = useState<any>({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);

  return {
    //pokemon,
    name: pokemon?.name,
    avatar: {
      main: pokemon?.sprites?.other?.dream_world?.front_default,
      sub: pokemon?.sprites?.other?.showdown?.front_default,
    },
    hp: _.first(pokemon?.stats)?.base_stat,
    height: pokemon?.height,
    weight: pokemon?.weight,
  }; //return needed only
};

export default useFetchPokemon;
