import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import { Movie } from "./pages/Movie";
import MoviesPage from "./pages/Movies";
import MovieLayout from "./layouts/MovieLayot";
import { Cast } from "./pages/Movie/Cast";
import { Videos } from "./pages/Movie/Videos";
import { Trailers } from "./pages/Movie/Videos/Trailers";
import { Teasers } from "./pages/Movie/Videos/Teasers";
import { Clips } from "./pages/Movie/Videos/Clips";
import { BehindTheScenes } from "./pages/Movie/Videos/BehindTheScenes";
import { Bloopers } from "./pages/Movie/Videos/Bloopers";
import { Featurettes } from "./pages/Movie/Videos/Featurettes";
import { Backdrops } from "./pages/Movie/Backdrops";
import { Posters } from "./pages/Movie/Posters";
import Search from "./pages/Search";

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
            children: [
              {
                index: true,
                element: <Trailers />,
              },
              {
                path: "trailers",
                element: <Trailers />,
              },
              {
                path: "teasers",
                element: <Teasers />,
              },
              {
                path: "clips",
                element: <Clips />,
              },
              {
                path: "behind-the-scenes",
                element: <BehindTheScenes />,
              },
              {
                path: "bloopers",
                element: <Bloopers />,
              },
              {
                path: "featurettes",
                element: <Featurettes />,
              },
            ],
          },
          {
            path: "backdrops",
            element: <Backdrops />,
          },
          {
            path: "posters",
            element: <Posters />,
          },
        ],
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

export default router;
