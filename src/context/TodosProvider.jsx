/**
 * TodosProvider
 * @package contexts
 */
import { createContext, useContext } from "react";
/* constants */
import { useTodoProvider } from "./useTodosProvider";

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
  /* hooks */
  const { todos, setTodos, addTodos, removeTodos } = useTodoProvider();

  return (
    <TodosContext.Provider value={{ todos, setTodos, addTodos, removeTodos }}>
      {props.children}
    </TodosContext.Provider>
  );
};
