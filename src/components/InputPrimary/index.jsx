/**
 * InputPrimary
 * @package components
 */
import { useState } from "react";
/* contexts */
import { useTodos } from "../../context/TodosProvider";
/* styles */
import classes from "./InputPrimary.module.scss";

/**
 * InputPrimary
 * @returns
 */
export const InputPrimary = () => {
  /* contexts */
  const { addTodos } = useTodos();
  /* local states */
  const [inputText, setInputText] = useState("");

  /**
   * inputText更新処理
   * @param {*} e
   */
  const onChangeInputText = (e) => {
    setInputText(e.target.value);
  };

  /**
   * タスク追加処理
   * @param {*} e
   */
  const onKeyDownInputEnter = (e) => {
    if (e.key === "Enter" && inputText !== "") {
      addTodos(inputText);
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
