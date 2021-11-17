import classes from "./TaskList.module.scss";

export const TaskList = () => {
  return (
    <div className={classes.inner}>
      <ul>
        <li className={classes.item}>
          <span>Task1</span>
          <i class="far fa-trash-alt"></i>
        </li>
        <li className={classes.item}>
          <span>
            Task2Task2Task2Task2Task2Task2Task2Task2Task2Task2Task2Task2Task2Task2Task2Task2
          </span>
          <i class="far fa-trash-alt"></i>
        </li>
      </ul>
    </div>
  );
};
