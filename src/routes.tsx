import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetails />,
      },
    ],
  },
]);

export default router;
