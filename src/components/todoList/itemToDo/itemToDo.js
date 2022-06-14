import classes from "./styles/itemToDoStyles.module.css";
import CreateIcon from "@mui/icons-material/Create";
import { TagItem } from "./tagItem";
import { AddTag } from "./addTag";
import {
  changeNote,
  removeNote,
  getTags,
  filterByTags,
  addTag,
  removeTag,
} from "../../../store/notes/action";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { nanoid } from "nanoid";

export const ItemToDo = ({ noteData }) => {
  //переменные
  const [isTextAreaVisible, setTextAreaVisible] = useState(false);

  const [noteText, setNoteText] = useState(noteData.text);

  const oldText = noteData.text;

  const regexp = /\S*#\S+/gi;

  //функции
  const dispatch = useDispatch();

  const showButtonHandler = () => {
    setTextAreaVisible(!isTextAreaVisible);
  };

  const addHandler = (tag) => {
    if (tag) {
      dispatch(addTag({ id: noteData.id, tag: tag }));
      dispatch(getTags());
    }
  };

  const filterHandler = (event) => {
    dispatch(filterByTags({ tag: event.target.textContent }));
  };

  const noteTextChangeHandler = (event) => {
    setNoteText(event.target.value);
  };

  const deleteNote = (event) => {
    dispatch(removeNote({ id: event.target.dataset.id }));
    dispatch(getTags());
  };

  const deleteTagHandler = (tag) => {
    dispatch(removeTag(noteData.id, tag));
    dispatch(getTags());
  };

  const changeNoteText = (event) => {
    //создаем массив с тэгами из текста заметки если введен текст
    if (noteText) {
      let matchAll = noteText.matchAll(regexp);

      const resultArray = Array.from(matchAll);

      const arrayWithTags = resultArray.map((tag) => {
        return tag[0];
      });

      //добовляем заметку в состояние
      dispatch(
        changeNote({
          id: event.target.dataset.id,
          text: noteText,
          tags: arrayWithTags,
        })
      );
      //обновляем тэги
      dispatch(getTags());

      // убираем поле textArea
      showButtonHandler();
    }

    showButtonHandler();
  };

  return (
    <li className={classes.itemToDo}>
      {isTextAreaVisible && (
        <div className={classes.itemToDo__textAreaWrapper}>
          <div
            onClick={() => {
              setTextAreaVisible(!isTextAreaVisible);
              setNoteText(oldText);
            }}
            className={classes.itemToDo__formCloser}
          ></div>

          <textarea
            autoFocus="autofocus"
            value={noteText}
            onChange={noteTextChangeHandler}
            className={classes.itemToDo__textArea}
            rows="10"
            cols="60"
            wrap="hard"
          ></textarea>
          <button
            data-id={noteData.id}
            onClick={changeNoteText}
            className={classes.itemToDo__addButton}
          >
            изменить текст
          </button>
        </div>
      )}
      <button
        onClick={deleteNote}
        data-id={noteData.id}
        className={classes.itemToDo__deleteButton}
      >
        X
      </button>
      <CreateIcon
        onClick={showButtonHandler}
        className={classes.itemToDo__editIcon}
      />
      <time className={classes.itemToDo__itemTime}>{noteData.date}</time>
      <p className={classes.itemToDo__itemText}>{noteData.text}</p>
      <ul className={classes.itemToDo__tagsList}>
        {noteData.tags.map((tag) => {
          return (
            <TagItem
              key={nanoid()}
              tag={tag}
              filterHandler={filterHandler}
              deleteTagHandler={deleteTagHandler}
            />
          );
        })}
        <AddTag addHandler={addHandler} />
      </ul>
    </li>
  );
};
