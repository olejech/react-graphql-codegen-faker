import { List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { getTodosWithDate } from "./api/apiService";
import { ApiTodo } from "./api/graphql-schema";

export const TodoListDate = () => {
  const [todos, setTodos] = useState<ApiTodo[]>([]);

  useEffect(() => {
    const fetchTodosWithDate = async () => {
      try {
        const todos = await getTodosWithDate();
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
            <ListItemText
              primary={todo.title}
              secondary={new Date(todo.createdAt).toLocaleDateString()}
            />
          </ListItem>
        );
      })}
    </List>
  );
};
