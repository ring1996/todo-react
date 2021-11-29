/**
 * App
 * @package src
 */
import React from "react";
/* components */
import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";
/* styles */
import classes from "./App.module.scss";

export const App = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Todo List</h1>
      {/* Todo新規登録フォーム */}
      <AddTask />
      {/* Todo一覧表示 */}
      <TaskList />
    </div>
  );
};
