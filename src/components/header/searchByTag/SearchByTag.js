import classes from "./styles/searchByTag.module.css";
import { useDispatch } from "react-redux";
import { filterByTags, clearFilterNotes } from "../../../store/notes/action";
import { useState } from "react";

export const SearchByTag = (tagsVisibleHandler) => {
  const [tagToSearch, setTegValue] = useState("");

  const dispatch = useDispatch();

  const makeTagsVisibleHandler = () => {
    tagsVisibleHandler.tagsVisibleHandler();
  };

  const changeHandlerValue = (event) => {
    setTegValue(event.target.value);
  };

  const createTag = () => {
    if (tagToSearch[0] === "#") {
      return tagToSearch;
    }
    return `#${tagToSearch}`;
  };

  const handleFilterButton = () => {
    dispatch(filterByTags({ tag: createTag() }));
    setTegValue("");
  };

  return (
    <div className={classes.searchByTag}>
      <input
        onChange={changeHandlerValue}
        value={tagToSearch}
        placeholder="введите тег"
        type="text"
        className={classes.searchByTag__input}
      />
      <button
        type="button"
        onClick={handleFilterButton}
        className={classes.searchByTag__buttonFilter}
      >
        искать по тегу
      </button>
      <button
        onClick={makeTagsVisibleHandler}
        type="button"
        className={classes.searchByTag__buttonShowAll}
      >
        показать все теги
      </button>
      <button
        onClick={() => {
          dispatch(clearFilterNotes());
        }}
        type="button"
        className={classes.searchByTag__buttonShowAll}
      >
        показать все заметки
      </button>
    </div>
  );
};
