import classes from "./InputPrimary.module.scss";

export const InputPrimary = (props) => {
  const onChangeTodoText = (e) => {
    props.setTodoText(e.target.value);
  };
  const onKeyPressInput = (e) => {
    if (e.key === "Enter") {
      const newTodo = e.target.value;
      props.setTodos([...props.todos, newTodo]);
      props.setTodoText("");
    }
  };
  return (
    <input
      className={classes.input}
      type="text"
      placeholder="New Task"
      value={props.todoText}
      onChange={onChangeTodoText}
      onKeyPress={onKeyPressInput}
    />
  );
};
