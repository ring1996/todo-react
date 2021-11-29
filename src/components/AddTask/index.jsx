/**
 * AddTask
 * @package components
 */
/* components */
import { InputPrimary } from "../InputPrimary";
/* styles */
import classes from "./AddTask.module.scss";

/**
 * AddTask
 * @returns
 */
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
