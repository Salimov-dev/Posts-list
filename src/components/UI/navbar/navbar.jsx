import React from "react";
// components
import NavbarList from "./components/navbar-list";
import BurgerMenu from "./components/burger-menu";
import Sidebar from "../sidebar/sidebar";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid d-flex navbar__container">
          <BurgerMenu />
          <NavbarList />
        </div>
      </nav>
      <Sidebar />
    </>
  );
};

export default Navbar;
