import classes from "./TaskList.module.scss";
import { useTodos } from "../../context/TodosProvider";

export const TaskList = () => {
  const { todos, removeTodos } = useTodos();
  return (
    <div className={classes.inner}>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id} className={classes.item}>
              <span>{todo.title}</span>
              <i
                className="far fa-trash-alt"
                onClick={() => removeTodos(todo.id)}
              ></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
