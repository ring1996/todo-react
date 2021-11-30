/**
 * TaskList
 * @package components
 */
/* contexts */
import { useTodos } from "../../context/TodosProvider";
/* styles */
import classes from "./TaskList.module.scss";

/**
 * TaskList
 * @returns
 */
export const TaskList = () => {
  /* contexts */
  const { todos, removeTodos } = useTodos();

  return (
    <div className={classes.inner}>
      <ul>
        {todos.map((todo) => {
          return (
            // keyにindexを扱うことはお勧めしない
            // 参考: https://ja.reactjs.org/docs/lists-and-keys.html#keys
            // 参考2: https://zenn.dev/luvmini511/articles/f7b22d93e9c182
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
