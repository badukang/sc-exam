import {
  IconButton,
  InputAdornment,
  ListItem,
  OutlinedInput,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import _ from "lodash";

const TodoInput = ({ handleInput }: any) => {
  const [val, setVal] = useState("");

  return (
    <ListItem disablePadding>
      <OutlinedInput
        onChange={(e) => {
          setVal(e.target.value);
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              edge="end"
              disabled={_.isEmpty(val)}
              onClick={() => {
                handleInput(val);
              }}
            >
              <AddIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </ListItem>
  );
};

export default TodoInput;
