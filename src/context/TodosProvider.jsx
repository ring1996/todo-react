/**
 * TodosProvider
 * @package contexts
 */
import { createContext, useContext, useState } from "react";
/* constants */
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data";

/**
 * TodosContext
 */
const TodosContext = createContext();

/**
 * useTodos
 * @returns
 */
export const useTodos = () => useContext(TodosContext);

/**
 * TodosProvider
 * @param {*} props
 * @returns
 */
export const TodosProvider = (props) => {
  /* states */
  /* todo list */
  const [todos, setTodos] = useState(INIT_TODO_LIST);
  /* id 採番 */
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);

  /**
   * タスク追加処理
   * @param {*} newTodo
   */
  const addTodos = (newTitle) => {
    // 元の配列を破壊しないように配列のコピーを作成して、その値でstateを更新する
    // pushでの配列追加は元の配列の値を変更するのでエラーになる

    // スプレッド構文で新しく配列のコピーを生成
    const newTaskList = [
      ...todos,
      {
        id: uniqueId,
        title: newTitle,
      },
    ];

    // concatでも配列コピーを生成することが可能
    // concatとpushの違い
    // https://kskpblog.com/javascript-array-add/
    // const newTaskList = todos.concat({
    //   id: uniqueId,
    //   title: newTitle,
    // });

    // タスク更新処理
    setTodos(newTaskList);
    // 採番IDをインクリメント
    setUniqueId(uniqueId + 1);
  };

  /**
   * タスク削除処理
   * @param {*} index
   */
  const removeTodos = (index) => {
    if (window.confirm("todoを削除してもいいですか？")) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  };

  return (
    <TodosContext.Provider value={{ todos, setTodos, addTodos, removeTodos }}>
      {props.children}
    </TodosContext.Provider>
  );
};
