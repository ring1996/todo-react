import classes from "./TaskList.module.scss";
import { useTodoList } from "./../../context/TodoListProvider";

export const TaskList = () => {
  const { todoList, removeTodoList } = useTodoList();
  return (
    <div className={classes.inner}>
      <ul>
        {todoList.map((todo, index) => {
          return (
            <li
              key={index}
              className={classes.item}
              onClick={() => removeTodoList(index)}
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
