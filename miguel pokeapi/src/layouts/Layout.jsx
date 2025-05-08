import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header"

const Layout = () => {
  return (
    <div>
      <Header/>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;