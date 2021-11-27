import "./reset.scss";
import "./base.scss";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { TodoListProvider } from "./context/TodoListProvider";

ReactDOM.render(
  <TodoListProvider>
    <App />
  </TodoListProvider>,
  document.getElementById("root")
);
