import ContentSection from "./components/ContentsSection";
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
        <div className="flex flex-col md:flex-row justify-between pt-24 items-center md:h-96">
          <ToDoApp />
          <QuotesApp />
        </div>
        <div className="hidden md:flex flex-col items-center mt-40">
          <p>
            <strong>Scroll down</strong> or press <strong>space</strong>
          </p>
          <RiArrowDownWideFill size={50} />
        </div>
        <ContentSection />
      </main>
    </>
  );
}

export default App;
