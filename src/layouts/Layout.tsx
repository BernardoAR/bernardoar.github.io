import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />

      <main className="p-6 md:px-16 md:pt-8">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
