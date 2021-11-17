import React, { useState } from "react";
import classes from "./App.module.scss";
import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Todo List</h1>
      <AddTask
        todoText={todoText}
        setTodoText={setTodoText}
        todos={todos}
        setTodos={setTodos}
      />
      <TaskList todos={todos} setTodos={setTodos} />
    </div>
  );
};
