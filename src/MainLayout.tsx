import Menu from "./components/Menu.tsx";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default MainLayout;
