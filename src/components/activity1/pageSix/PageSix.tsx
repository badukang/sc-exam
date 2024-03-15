"use client";

import React from "react";
import CardsList from "./CardsList";
import { Box } from "@mui/material";
import useFetchPokedex from "@/hooks/pokemon/useFetchPokedex";

const PageSix = () => {
  const pokedex = useFetchPokedex(33) as any;

  return (
    <Box className="flex items-center h-screen justify-center">
      <CardsList data={pokedex?.results} />
    </Box>
  );
};

export default PageSix;
