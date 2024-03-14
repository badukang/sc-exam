"use client";

import { Box, Button, ButtonGroup, Stack, TextField } from "@mui/material";
import { useState } from "react";

const inputs = {
  input1: 0,
  input2: 0,
};

const PageThree = () => {
  const [inputData, setInputData] = useState(inputs);
  const totalInput = inputData.input1 + inputData.input2;

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setInputData({
      ...inputData,
      [name]: parseInt(value),
    });
  };

  const handleReset = () => {
    setInputData(inputs);
  };

  return (
    <Box className="flex items-center h-screen justify-center">
      <Stack spacing={2}>
        <TextField
          type="number"
          name="input1"
          size="small"
          value={inputData?.input1}
          onChange={handleChange}
        />
        <TextField
          type="number"
          name="input2"
          size="small"
          value={inputData?.input2}
          onChange={handleChange}
        />
        <TextField disabled value={`sum is ${totalInput}`} size="small" />
        <ButtonGroup className="flex w-full">
          <Button onClick={handleReset}>reset</Button>
        </ButtonGroup>
      </Stack>
    </Box>
  );
};

export default PageThree;
