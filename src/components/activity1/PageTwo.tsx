"use client";

import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";

const PageTwo = () => {
  const [counter, setCounter] = useState(0);
  const isOddOrEven = counter % 2 === 0 ? "even" : "odd";
  const isDisabled = counter === 0 ?? false;

  const handleButton = (operation?: any) => {
    if (operation === "dec") {
      setCounter((prev) => prev + 1);
    } else {
      setCounter((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <Box className="flex items-center h-screen justify-center">
      <Stack spacing={2}>
        <TextField
          disabled
          value={`${counter} is ${isOddOrEven}`}
          size="small"
        />
        <ButtonGroup className="flex w-full">
          <Button disabled={isDisabled} onClick={() => handleButton()}>
            -
          </Button>
          <Button disabled={isDisabled} onClick={handleReset}>
            reset
          </Button>
          <Button onClick={() => handleButton("dec")}>+</Button>
        </ButtonGroup>
      </Stack>
    </Box>
  );
};

export default PageTwo;
