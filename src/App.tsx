import Nav from "./components/Nav";
import ToDoApp from "./components/ToDoApp";
import { type route } from "./types";
function App() {
  const routes: route[] = [
    { title: "How to use", url: "/", bold: true },
    { title: "About us", url: "/"}
  ];

  return (
    <>
      <Nav routes={routes} />
      <ToDoApp/>
    </>
  );
}

export default App;
