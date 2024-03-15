"use client";

import React from "react";
import CardsList from "./CardsList";
import { Box } from "@mui/material";
import useFetchPokedex from "@/hooks/pokemon/useFetchPokedex";

const PageSix = () => {
  const { results } = useFetchPokedex(33);

  return (
    <Box className="flex items-center h-screen justify-center">
      <CardsList data={results} />
    </Box>
  );
};

export default PageSix;
