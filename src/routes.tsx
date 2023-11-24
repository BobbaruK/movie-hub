import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MoviesPage from "./pages/Movies";
import Cast from "./pages/Cast";

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
      {
        path: "/movie/:id/cast",
        element: <Cast />,
      },
    ],
  },
]);

export default router;
