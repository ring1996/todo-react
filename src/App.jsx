import React from "react";
import classes from "./App.module.scss";
import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";

export const App = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Todo List</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};
