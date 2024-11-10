import Nav from "./components/Nav";
import QuotesApp from "./components/QuotesApp";
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
      <main className="flex justify-between pt-16 items-center">
        <ToDoApp />
        <QuotesApp />
      </main>
    </>
  );
}

export default App;
