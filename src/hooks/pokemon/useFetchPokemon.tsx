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

  const pokemonStats = _.first(pokemon?.stats) as any;
  const results = {
    //pokemon,
    name: pokemon?.name,
    avatar: {
      main: pokemon?.sprites?.other?.dream_world?.front_default,
      sub: pokemon?.sprites?.other?.showdown?.front_default,
    },
    hp: pokemonStats?.base_stat,
    height: pokemon?.height,
    weight: pokemon?.weight,
  } as any;

  return results; //return needed only
};

export default useFetchPokemon;
