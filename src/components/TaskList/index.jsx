import classes from "./TaskList.module.scss";

export const TaskList = (props) => {
  const onClickDeleteTodo = (index) => {
    const newTodoList = [...props.todoList];
    newTodoList.splice(index, 1);
    props.setTodoList(newTodoList);
  };
  return (
    <div className={classes.inner}>
      <ul>
        {props.todoList.map((todo, index) => {
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