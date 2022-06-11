import { useState } from "react";
import classes from "./styles/addNote.module.css";

export const AddNote = () => {
  const [isTextAreaVisible, setTextAreaVisible] = useState(false);
  const [noteText, setNoteText] = useState("");

  const showButtonHandler = () => {
    setTextAreaVisible(!isTextAreaVisible);
  };

  const noteTextChangeHandler = (event) => {
    setNoteText(event.target.value);
    console.log(noteText);
  };

  return (
    <div className={classes.addNote}>
      {isTextAreaVisible && (
        <div className={classes.addNote__textAreaWrapper}>
          <div
            onClick={showButtonHandler}
            className={classes.addNote__formCloser}
          ></div>

          <textarea
            value={noteText}
            onChange={noteTextChangeHandler}
            className={classes.addNote__textArea}
            rows="10"
            cols="60"
            wrap="hard"
          ></textarea>
          <button
            onClick={showButtonHandler}
            className={classes.addNote__addButton}
          >
            добавить заметку
          </button>
        </div>
      )}

      <button
        onClick={showButtonHandler}
        className={classes.addNote__showButton}
        type="button"
      >
        написать заметку
      </button>
    </div>
  );
};
