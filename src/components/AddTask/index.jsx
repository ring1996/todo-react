import { InputPrimary } from "../InputPrimary";
import classes from "./AddTask.module.scss";

export const AddTask = (props) => {
  return (
    <div className={classes.inner}>
      <p className={classes.title}>Add Task</p>
      <p className={classes.inputArea}>
        <InputPrimary
          todoText={props.todoText}
          setTodoText={props.setTodoText}
          todos={props.todos}
          setTodos={props.setTodos}
        />
      </p>
    </div>
  );
};
