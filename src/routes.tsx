import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MoviesPage from "./pages/Movies";
import Cast from "./pages/Cast";
import MovieLayout from "./layouts/MovieLayot";

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
        element: <MovieLayout />,
        children: [
          {
            index: true,
            element: <Movie />,
          },
          {
            path: "cast",
            element: <Cast />,
          },
        ],
      },
      // {
      //   path: "/movie/:id/cast",
      //   element: <Cast />,
      // },
    ],
  },
]);

export default router;
