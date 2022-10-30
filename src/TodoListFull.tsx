import { List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { getTodosFull } from "./api/apiService";
import { ApiTodo } from "./api/graphql-schema";

export const TodoListFull = () => {
  const [todos, setTodos] = useState<ApiTodo[]>([]);

  useEffect(() => {
    const fetchTodosWithDate = async () => {
      try {
        const todos = await getTodosFull();
        setTodos(todos);
      } catch (error) {}
    };
    fetchTodosWithDate();
  }, []);

  return (
    <List
      sx={{
        maxWidth: 360,
        margin: "0 auto",
      }}
    >
      {todos.map((todo) => {
        return (
          <ListItem key={todo.id} disablePadding>
            <ListItemText primary={todo.title} secondary={todo.text} />
          </ListItem>
        );
      })}
    </List>
  );
};
