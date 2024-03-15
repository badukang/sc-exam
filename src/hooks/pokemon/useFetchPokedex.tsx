"use client";
import _ from "lodash";
import { useEffect, useState } from "react";

const useFetchPokedex = (limit: number) => {
  const [pokedex, setPokedex] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => setPokedex(data)); //update base on data map need
  }, []);

  return pokedex;
};

export default useFetchPokedex;
