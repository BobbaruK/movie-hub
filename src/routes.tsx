import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MoviesPage from "./pages/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movies",
        element: <MoviesPage />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
    ],
  },
]);

export default router;
