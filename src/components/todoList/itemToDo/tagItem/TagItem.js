import classes from "./styles/tagItemStyles.module.css";

export const TagItem = ({ tag, filterHandler, deleteTagHandler }) => {
  const handler = (event) => {
    filterHandler(event);
  };
  const tagDeleter = () => {
    deleteTagHandler(tag);
  };
  return (
    <li className={classes.tagsListItem}>
      <p onClick={handler} className={classes.tagsListItem__tag}>
        {tag}
      </p>
      <button onClick={tagDeleter} className={classes.tagsListItem__button}>
        удалить
      </button>
    </li>
  );
};
