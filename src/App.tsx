import Nav from "./components/Nav";
import ToDoApp from "./components/ToDoApp";
import { type route } from "./types";
function App() {
  const routes: route[] = [
    { title: "How to use", url: "/", bold: true },
    { title: "About us", url: "/" },
  ];

  return (
    <>
      <Nav routes={routes} />
      <h1 className="text-4xl pl-3 font-semibold mt-20">
        Boost Your Productivity
      </h1>
      <ToDoApp />
    </>
  );
}

export default App;
