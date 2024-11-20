import Nav from "./components/Nav";
import { routes } from "./constants";
import { HomePage } from "./pages/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  return (
    <>
      <header>
        <Nav routes={routes} />
      </header>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
