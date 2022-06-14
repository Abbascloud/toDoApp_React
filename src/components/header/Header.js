import classes from "./styles/headerStyles.module.css";
import { AddNote } from "./addNote";
import { SearchByTag } from "./searchByTag";
import { nanoid } from "nanoid";
import { useState } from "react";
import { filterByTags } from "../../store/notes/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { tagsSelector } from "../../store/notes/selectors";

export const Header = () => {
  const [isTagsVisible, setTagsvisible] = useState(false);

  const tags = useSelector(tagsSelector);

  const dispatch = useDispatch();

  const tagPressHandler = (event) => {
    dispatch(filterByTags({ tag: event.target.textContent }));
  };
  const noTagsTextVisible = () => {
    if (tags.length) {
      return false;
    }
    return true;
  };
  const tagsVisibleHandler = () => {
    setTagsvisible(!isTagsVisible);
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__controllers}>
        <div className={classes.header__addNote}>
          <AddNote />
        </div>
        <div className={classes.header__searchByTag}>
          <SearchByTag tagsVisibleHandler={tagsVisibleHandler} />
        </div>
      </div>
      <nav className={classes.header__navTags}>
        {isTagsVisible && (
          <ul className={classes.header__navTagsList}>
            {noTagsTextVisible() && (
              <li>
                <h2>Вы не создали тегов</h2>
              </li>
            )}
            {tags.map((tag, index) => {
              return (
                <li
                  onClick={tagPressHandler}
                  className={classes.header__navTagsitem}
                  key={nanoid()}
                >
                  {tag}
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
};
