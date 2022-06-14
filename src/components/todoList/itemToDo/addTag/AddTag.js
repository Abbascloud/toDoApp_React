import { useState } from "react";
import classes from "./styles/addTagStyle.module.css";

export const AddTag = ({ addHandler }) => {
  const [value, setValue] = useState("");
  const inputHandler = (event) => {
    setValue(event.target.value);
  };

  const makeTag = (tag) => {
    if (tag[0] === "#" && tag.length === 1) {
      return null;
    }
    if (tag[0] === "#") {
      return tag;
    }
    return `#${tag}`;
  };

  const buttonHandler = () => {
    if (value) {
      const tag = makeTag(value);
      addHandler(tag);
      setValue("");
    }
  };
  return (
    <li className={classes.addTag}>
      <input
        className={classes.addTag__input}
        onChange={inputHandler}
        placeholder="введите название тега"
        value={value}
        type="text"
      />
      <button onClick={buttonHandler} className={classes.addTag__button}>
        добавить тег
      </button>
    </li>
  );
};
