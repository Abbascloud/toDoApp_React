import clases from "./styles/landingStyles.modules.css";
import { ToDoList } from "../../components";

export const Landing = () => {
  return (
    <main className={clases.landing}>
      <ToDoList />
    </main>
  );
};
