import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { History } from "./pages/History";
import { Home } from "./pages/Home";

export function Router() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/history",
      element: <History />,
    },
  ]);

  return <RouterProvider router={browserRouter} />;
}
