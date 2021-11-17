import classes from "./TaskList.module.scss";

export const TaskList = (props) => {
  const onClickDeleteTodo = (index) => {
    const newTodos = [...props.todos];
    newTodos.splice(index, 1);
    props.setTodos(newTodos);
  };
  return (
    <div className={classes.inner}>
      <ul>
        {props.todos.map((todo, index) => {
          return (
            <li
              key={index}
              className={classes.item}
              onClick={() => onClickDeleteTodo(index)}
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
