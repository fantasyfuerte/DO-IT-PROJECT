import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { routes } from "./constants";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <header>
        <Nav routes={routes} />
      </header>
      <main>
        <HomePage />
      </main>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <Footer />
      </footer>
    </>
  );
}

export default App;
