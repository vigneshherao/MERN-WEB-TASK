import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body";
import SignUp from "./components/SignUp";
import HeaderLayout from "./components/HeaderLayout";

function App() {

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <HeaderLayout />,
      children: [
        {
          path: "/",
          element: <Body />
        },
        {
          path: "/signin",
          element: <SignUp />
        },
      ]
    },
  ]);

  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
