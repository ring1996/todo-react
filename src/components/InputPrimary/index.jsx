import { useState } from "react";
import classes from "./InputPrimary.module.scss";
import { useTodos } from "../../context/TodosProvider";

export const InputPrimary = () => {
  const { addTodos } = useTodos();
  const [inputText, setInputText] = useState("");
  const onChangeInputText = (e) => {
    setInputText(e.target.value);
  };
  const onKeyDownInputEnter = (e) => {
    if (e.key === "Enter") {
      addTodos(e.target.value);
      setInputText("");
    }
  };
  return (
    <input
      className={classes.input}
      type="text"
      placeholder="New Task"
      value={inputText}
      onChange={onChangeInputText}
      onKeyDown={onKeyDownInputEnter}
    />
  );
};
