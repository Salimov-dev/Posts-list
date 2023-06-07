import React, { useEffect, useState } from "react";
// components
import SearchForm from "./components/search-form";
import NavbarList from "./components/navbar-list";
import BurgerMenu from "./components/burger-menu";
import Sidebar from "../sidebar/sidebar";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <BurgerMenu />
          <NavbarList />
        </div>
      </nav>
      <Sidebar />
    </>
  );
};

export default Navbar;
