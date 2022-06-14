import { useState } from "react";
import classes from "./styles/addNote.module.css";
import { useDispatch } from "react-redux/es/exports";
import { addNote, getTags } from "../../../store/notes/action";

export const AddNote = () => {
  const [isTextAreaVisible, setTextAreaVisible] = useState(false);
  const [noteText, setNoteText] = useState("");

  const dispatch = useDispatch();

  const showButtonHandler = () => {
    setTextAreaVisible(!isTextAreaVisible);
  };

  const noteTextChangeHandler = (event) => {
    setNoteText(event.target.value);
  };

  const addNewNote = () => {
    if (noteText) {
      const regexp = /#\S+/gi;

      let matchAll = noteText.matchAll(regexp);

      const resultArray = Array.from(matchAll);

      const arrayWithTags = resultArray.map((tag) => {
        return tag[0];
      });

      dispatch(addNote({ text: noteText, tags: arrayWithTags }));
      dispatch(getTags());
      setNoteText("");
      showButtonHandler();
    }
    showButtonHandler();
  };

  return (
    <div className={classes.addNote}>
      {isTextAreaVisible && (
        <div className={classes.addNote__textAreaWrapper}>
          <div
            onClick={() => {
              showButtonHandler();
              setNoteText("");
            }}
            className={classes.addNote__formCloser}
          ></div>

          <textarea
            autoFocus="autofocus"
            value={noteText}
            onChange={noteTextChangeHandler}
            className={classes.addNote__textArea}
            rows="10"
            cols="60"
            wrap="hard"
          ></textarea>
          <button onClick={addNewNote} className={classes.addNote__addButton}>
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
