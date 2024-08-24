import React from "react";
import Home from "../Pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { navlinks } from "../helpers/data";
import NotFound from "../Pages/NotFound";

const Layout = () => {
  return (
    <div>
      <Navbar navlinks={navlinks} />

      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
