import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { getTodos, switchTodo } from "./api/apiService";
import { ApiTodo } from "./api/graphql-schema";

type TodoListProps = {
  todos: ApiTodo[];
  setTodos: React.Dispatch<React.SetStateAction<ApiTodo[]>>;
};

export const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  React.useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todos = await getTodos();
        setTodos(todos);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTodos();
  }, [setTodos]);

  const handleToggle = (id: string) => async () => {
    try {
      switchTodo({ id });
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

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
            <ListItemButton dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.done}
                  disableRipple
                  onClick={handleToggle(todo.id)}
                />
              </ListItemIcon>
              <ListItemText primary={todo.title} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
