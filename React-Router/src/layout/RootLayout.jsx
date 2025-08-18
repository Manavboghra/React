import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
