/**
 * useTodoProvider
 * @package hooks
 */
import { useState } from "react";
/* constants */
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data";

/**
 * useTodoProvider
 * @returns
 */
export const useTodoProvider = () => {
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
  const removeTodos = (targetId) => {
    if (window.confirm("todoを削除してもいいですか？")) {
      // Todoのデータ構造を変更したので、処理を変更する (ただの配列ではなく、オブジェクト配列になったため)
      // const newTodos = [...todos];
      // newTodos.splice(index, 1);
      // 削除するid以外のtodoリストを再編集
      const newTodoList = todos.filter((todo) => todo.id !== targetId);
      // todoを削除したtodo listで更新
      setTodos(newTodoList);
    }
  };

  return { todos, setTodos, addTodos, removeTodos };
};
