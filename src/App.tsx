import ContentSection from "./components/ContentsSection";
import Nav from "./components/Nav";
import QuotesApp from "./components/QuotesApp";
import ScrollDownText from "./components/ScrollDownText";
import ToDoApp from "./components/ToDoApp";
import { routes } from "./constants";

function App() {
  return (
    <>
      <header>
        <Nav routes={routes} />
      </header>
      <main>
        <div className="flex flex-col md:flex-row justify-between items-center h-screen">
          <ToDoApp />
          <QuotesApp />
        </div>
        <ScrollDownText/>
        <ContentSection />
      </main>
    </>
  );
}

export default App;
