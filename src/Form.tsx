import { Box, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { createTodo } from "./api/apiService";
import { ApiTodo } from "./api/graphql-schema";

type FormProps = {
  setTodos: React.Dispatch<React.SetStateAction<ApiTodo[]>>;
};

export const Form: React.FC<FormProps> = ({ setTodos }) => {
  const [nextTodo, setNextTodo] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNextTodo(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!nextTodo.trim()) return;

    const addedTodo = await createTodo({
      title: nextTodo,
      text: nextTodo,
      userId: "1",
    });
    setTodos((todos) => [...todos, addedTodo]);
    setNextTodo("");
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit}>
      <TextField
        value={nextTodo}
        onChange={handleChange}
        placeholder="input next todo"
      />
    </Box>
  );
};
