import { createBrowserRouter } from "react-router-dom";
import TestPage from "./pages/TestPage";
import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";

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
        path: "/test",
        element: <TestPage />,
      },
    ],
  },
]);

export default router;
