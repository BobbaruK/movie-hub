import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import { Movie } from "./pages/Movie";
import MoviesPage from "./pages/Movies";
import MovieLayout from "./layouts/MovieLayot";
import { Cast } from "./pages/Movie/Cast";
import { Videos } from "./pages/Movie/Videos";

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
          {
            path: "videos",
            element: <Videos />,
          },
        ],
      },
    ],
  },
]);

export default router;
