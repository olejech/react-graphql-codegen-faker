import React from "react";
import { Typography } from "@mui/material";
import { Form } from "./Form";
import { ApiTodo } from "./api/graphql-schema";
import { TodoListDate } from "./TodoListDate";
import { TodoListFull } from "./TodoListFull";
import { TodoList } from "./TodoList";

function App() {
  const [todos, setTodos] = React.useState<ApiTodo[]>([]);

  return (
    <>
      <div style={{ margin: "0 auto 40px", width: 400 }}>
        <Typography variant="h4">Todo list</Typography>
        <TodoList todos={todos} setTodos={setTodos} />
        <Form setTodos={setTodos} />
      </div>

      <div style={{ margin: "0 auto 40px", width: 400 }}>
        <Typography variant="h4">Todo list with date</Typography>
        <TodoListDate />
      </div>

      <div style={{ margin: "0 auto 40px", width: 400 }}>
        <Typography variant="h4">Todo list full</Typography>
        <TodoListFull />
      </div>
    </>
  );
}

export default App;
