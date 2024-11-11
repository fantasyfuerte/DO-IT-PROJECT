import Nav from "./components/Nav";
import QuotesApp from "./components/QuotesApp";
import ToDoApp from "./components/ToDoApp";
import { routes } from "./constants";
function App() {
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
