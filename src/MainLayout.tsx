import { useEffect } from "react";
import Menu from "./components/Menu.tsx";
import { Outlet } from "react-router-dom";
import { getUserToken } from "./service/api.service.ts";

const MainLayout = () => {
  useEffect(() => {
    const fetchToken = async () => {
      const user = await getUserToken();
      if (user) {
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user));
      }
    };
    fetchToken();
  }, []);

  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default MainLayout;
