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
        <HomePage></HomePage>
      </main>
    </>
  );
}

export default App;
