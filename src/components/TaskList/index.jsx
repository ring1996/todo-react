import classes from "./TaskList.module.scss";
import { useTodos } from "../../context/TodosProvider";

export const TaskList = () => {
  const { todos, removeTodos } = useTodos();
  return (
    <div className={classes.inner}>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li
              key={index}
              className={classes.item}
              onClick={() => removeTodos(index)}
            >
              <span>{todo}</span>
              <i className="far fa-trash-alt"></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
