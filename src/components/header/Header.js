import clases from "./styles/headerStyles.module.css";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { AddNote } from "./addNote";

export const Header = () => {
  const tags = ["shop", "work"];

  return (
    <header className={clases.header}>
      <div className={clases.header__addNote}>
        <AddNote />
      </div>
      <div className={clases.header__searchByTag}>
        <Autocomplete
          disablePortal
          id="tagSearch"
          options={tags}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="найти заметку по тэгу" />
          )}
        />
      </div>
    </header>
  );
};
