import { Button, Slider } from "@mui/material";
import React from "react";

//no need
const Header = () => {
  return (
    <>
      <Slider defaultValue={30} />
      <Slider defaultValue={30} className="text-teal-600" />
      <Button>a</Button>
    </>
  );
};

export default Header;
