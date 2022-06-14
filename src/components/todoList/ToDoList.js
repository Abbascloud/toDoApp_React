import clases from "./styles/todoListStyle.module.css";
import { ItemToDo } from "./itemToDo";
import { useSelector } from "react-redux";
import {
  noteSelector,
  filteredNotesSelector,
} from "../../store/notes/selectors";
import { useEffect, useState } from "react";

export const ToDoList = () => {
  const allNotesData = useSelector(noteSelector);
  const filteredData = useSelector(filteredNotesSelector);
  const [notesData, setDataToRender] = useState([]);

  const checkDataForRender = () => {
    if (filteredData.length) {
      return filteredData;
    }
    return allNotesData;
  };

  useEffect(() => {
    setDataToRender(checkDataForRender());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allNotesData, filteredData]);

  const checkVisible = () => {
    if (notesData.length) {
      return true;
    }
    return false;
  };
  const searchIsVisible = () => {
    if (filteredData.length) {
      return true;
    }
    return false;
  };

  return (
    <div className={clases.toDoList}>
      {!checkVisible() && (
        <div>
          <h1 className={clases.toDoList__title}>Заметок пока нет</h1>
          <p>чтобы добавить заметку нажмите на кнопку НАПИСАТЬ ЗАМЕТКУ</p>
        </div>
      )}
      {checkVisible() && (
        <div>
          <h1 className={clases.toDoList__title}>Мои заметки</h1>{" "}
          {searchIsVisible() && <h2>результаты поиска</h2>}
        </div>
      )}
      <ol className={clases.toDoList__list}>
        {notesData.map((noteData) => {
          return <ItemToDo key={noteData.id} noteData={noteData} />;
        })}
      </ol>
    </div>
  );
};
