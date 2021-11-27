import { createContext, useContext, useState } from "react";

const TodosContext = createContext();

export const useTodos = () => useContext(TodosContext);

export const TodosProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const addTodos = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const removeTodos = (index) => {
    if (window.confirm("todoを削除してもいいですか？")) {
      setTodos(todos.filter((todoItem) => todos[index] !== todoItem));
    }
  };
  return (
    <TodosContext.Provider value={{ todos, setTodos, addTodos, removeTodos }}>
      {props.children}
    </TodosContext.Provider>
  );
};
