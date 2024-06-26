import AuthorsPage from "./pages/Authorspage";
import SearchPage from "./pages/Searchpage";
import Homepage from "./pages/Homepage";
import { useRoutes } from "react-router-dom";
import RandomPage from "./pages/Randompage";

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "/search", element: <SearchPage /> },
    { path: "/authors", element: <AuthorsPage /> },
    { path: "/random", element: <RandomPage /> },
  ]);
  return <>{routes}</>;
};

export default App;
