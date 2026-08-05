import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />

      <main className="pt-4 sm:pt-8 md:px-16 md:pt-12 lg:pt-16">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
