"use client";

import { Box, Button } from "@mui/material";
import _ from "lodash";
import { useEffect, useRef, useState } from "react";

const initSize = { width: 0, height: 0 };

const PageFour = () => {
  const { innerWidth, innerHeight } = window;
  const [size, setSize] = useState(initSize);
  const buttonRef = useRef<null>(null);

  const getRandomColor = () => {
    return Math.floor(Math.random() * 0xffffff).toString(16);
  };

  //is css zoom allowed?
  const handleClick = () => {
    setSize((prev) => {
      const width = prev.width * 2;
      const height = prev.height * 2;

      return {
        width: width < innerWidth ? width : prev.width,
        height: height < innerHeight ? height : prev.height,
      };
    });
  };

  useEffect(() => {
    if (buttonRef.current) {
      const { clientHeight, clientWidth } = buttonRef?.current;

      setSize({
        height: clientHeight,
        width: clientWidth,
      });
    }
  }, []);

  return (
    <Box className="flex items-center h-screen justify-center">
      <Button
        ref={buttonRef}
        onClick={handleClick}
        sx={{
          backgroundColor: `#${getRandomColor()}`,
          color: `#${getRandomColor()}`,
          ...(size.height === 0 ? {} : { height: size.height }),
          ...(size.width === 0 ? {} : { width: size.width }),
        }}
      >
        Grow
      </Button>
    </Box>
  );
};

export default PageFour;
