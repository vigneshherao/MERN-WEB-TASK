import { Outlet } from "react-router-dom";
import Header from "./Header";

function HeaderLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}


export default HeaderLayout;