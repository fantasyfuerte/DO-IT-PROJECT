import Nav from "./components/Nav";
import QuotesApp from "./components/QuotesApp";
import ToDoApp from "./components/ToDoApp";
import { routes } from "./constants";
function App() {
  return (
    <>
      <header>
        <Nav routes={routes} />
      </header>
      <main className="flex justify-between pt-16 items-center h-96">
        <ToDoApp />
        <QuotesApp />
      </main>
    </>
  );
}

export default App;
