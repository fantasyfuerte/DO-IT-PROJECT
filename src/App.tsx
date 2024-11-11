import Nav from "./components/Nav";
import QuotesApp from "./components/QuotesApp";
import ToDoApp from "./components/ToDoApp";
import { routes } from "./constants";
import { RiArrowDownWideFill } from "react-icons/ri";
function App() {
  return (
    <>
      <header>
        <Nav routes={routes} />
      </header>
      <main>
        <div className="flex justify-between pt-24 items-center h-96">
          <ToDoApp />
          <QuotesApp />
        </div>
        <div className="flex flex-col items-center mt-40">
          <p className=""><strong>Scroll down</strong> or press <strong>space</strong></p>
          <RiArrowDownWideFill size={50} />
        </div>
        <section className="height-80 flex justify-around">
          <article className="bg-red-400 h-56 flex-grow m-5 rounded-lg"></article>
          <article className="bg-red-400 h-56 flex-grow m-5 rounded-lg"></article>
          <article className="bg-red-400 h-56 flex-grow m-5 rounded-lg"></article>
        </section>
      </main>
    </>
  );
}

export default App;
