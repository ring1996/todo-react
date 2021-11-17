import { InputPrimary } from "../InputPrimary";
import classes from "./AddTask.module.scss";

export const AddTask = () => {
  return (
    <div className={classes.inner}>
      <p className={classes.title}>Add Task</p>
      <p className={classes.inputArea}>
        <InputPrimary />
      </p>
    </div>
  );
};
