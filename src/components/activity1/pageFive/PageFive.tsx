"use client";

import { Box, List } from "@mui/material";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useState } from "react";
import { todoItems } from "@/static/maps";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

const PageFive = () => {
  const [todos, setTodos] = useState(todoItems);

  const handleChange = (id: any) => {
    setTodos((todo) =>
      todo.map((item) =>
        item?.id === id ? { ...item, active: !item?.active } : item
      )
    );
  };

  const handleDelete = (id: any) => {
    setTodos((todo) => _.reject(todo, (item) => item?.id === id));
  };

  const handleInput = (text: any) => {
    setTodos((todo: any) => [
      ...todo,
      { id: uuidv4(), title: text, active: false },
    ]);
  };

  return (
    <Box className="flex items-center h-screen justify-center">
      <List>
        <TodoInput handleInput={handleInput} />
        {todos.map((item) => (
          <TodoItem
            key={item?.id}
            item={item}
            handleChange={handleChange}
            handleDelete={handleDelete}
          />
        ))}
      </List>
    </Box>
  );
};

export default PageFive;
