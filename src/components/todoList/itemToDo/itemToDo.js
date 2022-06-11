import clases from "./styles/itemToDoStyles.module.css";

export const ItemToDo = (noteData) => {
  return (
    <li className={clases.itemToDo}>
      <time className={clases.itemToDo__itemTime}>
        дата публикации 12:23:2200
      </time>
      <p className={clases.itemToDo__itemText}>
        And that delivery notice that I found, the one that made us think that
        Cannerts sent the virus to Burns, my hacker says it's got electronic
        fingerprints all over it. And that delivery notice that I found, the one
        that made us think that Cannerts sent the virus to Burns, my hacker says
        it's got electronic fingerprints all over it. And that delivery notice
        that I found, the one that made us think that Cannerts sent the virus to
        Burns, my hacker says it's got electronic fingerprints all over it. And
        that delivery notice that I found, the one that made us think that
        Cannerts sent the virus to Burns, my hacker says it's got electronic
        fingerprints all over it. And that delivery notice that I found, the one
        that made us think that Cannerts sent the virus to Burns, my hacker says
        it's got electronic fingerprints all over it. #shop #work
      </p>
      <ul className={clases.itemToDo__tagsList}>
        <li className={clases.itemToDo__tagsListItem}>#shop</li>
        <li className={clases.itemToDo__tagsListItem}>#work</li>
      </ul>
    </li>
  );
};
