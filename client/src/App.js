import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body";
import SignUp from "./components/SignUp";
import HeaderLayout from "./components/HeaderLayout";
import SignIn from "./components/SignIn";
import Courses from "./components/Courses";
import Error from "./components/Error";


function App() {

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <HeaderLayout />,
      errorElement:<Error/>,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
      ]
    },
  ]);

  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
