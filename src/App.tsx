import Nav from "./components/Nav";
import { routes } from "./constants";
import { HomePage } from "./pages/HomePage";
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate
} from "react-router-dom";



function App() {
  return (
    <>
      <header>
        <Nav routes={routes} />
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomePage/>} />
            <Route path="/" element={<Navigate to={"/home"} />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
