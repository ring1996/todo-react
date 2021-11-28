import { createContext, useContext, useState } from "react";

const TodosContext = createContext();

export const useTodos = () => useContext(TodosContext);

export const TodosProvider = (props) => {
  const [todos, setTodos] = useState(["Task1", "Task2"]);
  const addTodos = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
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
