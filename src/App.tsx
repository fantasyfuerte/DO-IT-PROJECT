import ContentSection from "./ContentsSection/ContentsSection";
import Nav from "./components/Nav";
import QuotesApp from "./QuotesApp/QuotesApp";
import ScrollDownText from "./components/ScrollDownText";
import ToDoApp from "./ToDoApp/ToDoApp";
import { routes } from "./constants";

function App() {
  return (
    <>
      <header>
        <Nav routes={routes} />
      </header>
      <main>
        <div className="flex flex-col md:flex-row mt-32 md:mt-0 md:justify-between justify-start items-center h-screen ">
          <ToDoApp />
          <QuotesApp />
        </div>
        <ScrollDownText />
        <ContentSection />
      </main>
    </>
  );
}

export default App;
