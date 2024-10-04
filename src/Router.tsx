import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { History } from "./pages/History";
import { Home } from "./pages/Home";

export function Router() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/history",
          element: <History />,
        },
      ],
    },
  ]);

  return <RouterProvider router={browserRouter} />;
}
