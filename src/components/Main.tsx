import "./Main.css";
import Notes from "./Notes";
import Input from "./Input";
import Note from "../features/notes/Note";
interface ref {
  current: string;
}

interface props {
  notes: string[];
  currentTab: ref;
}
function Main(props: props) {
  return (
    <main className="main">
      <Notes notes={props.notes} />
      <Input currentTab={props.currentTab} />
    </main>
  );
}
export default Main;
