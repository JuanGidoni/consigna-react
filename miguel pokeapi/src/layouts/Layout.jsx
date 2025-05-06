import React from "react";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;