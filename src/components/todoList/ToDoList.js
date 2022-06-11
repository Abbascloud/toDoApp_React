import clases from "./styles/todoListStyle.module.css";
import { ItemToDo } from "./itemToDo";

export const ToDoList = () => {
  const notesData = {};
  return (
    <div className={clases.toDoList}>
      <h1 className={clases.toDoList__title}>Мои заметки</h1>
      <ol className={clases.toDoList__list}>
        <ItemToDo />
        <ItemToDo />
        <ItemToDo />
      </ol>
    </div>
  );
};
