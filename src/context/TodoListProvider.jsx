import { createContext, useContext, useState } from "react";

const TodoListContext = createContext();

export const useTodoList = () => useContext(TodoListContext);

export const TodoListProvider = (props) => {
  const [todoList, setTodoList] = useState([]);
  const addTodoList = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  const removeTodoList = (index) => {
    const newTodoList = todoList.filter(
      (todoItem) => todoList[index] !== todoItem
    );
    setTodoList(newTodoList);
  };
  return (
    <TodoListContext.Provider
      value={{ todoList, setTodoList, addTodoList, removeTodoList }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
};
