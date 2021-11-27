import { useState } from "react";
import classes from "./InputPrimary.module.scss";
import { useTodoList } from "./../../context/TodoListProvider";

export const InputPrimary = () => {
  const { addTodoList } = useTodoList();
  const [todoText, setTodoText] = useState("");
  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };
  const onKeyPressInput = (e) => {
    if (e.key === "Enter") {
      addTodoList(e.target.value);
      setTodoText("");
    }
  };
  return (
    <input
      className={classes.input}
      type="text"
      placeholder="New Task"
      value={todoText}
      onChange={onChangeTodoText}
      onKeyPress={onKeyPressInput}
    />
  );
};
