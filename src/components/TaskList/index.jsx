import classes from "./TaskList.module.scss";

export const TaskList = (props) => {
  return (
    <div className={classes.inner}>
      <ul>
        {props.todos.map((todo, index) => {
          return (
            <li key={index} className={classes.item}>
              <span>{todo}</span>
              <i className="far fa-trash-alt"></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
