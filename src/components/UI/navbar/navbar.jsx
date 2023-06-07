import React, { useState } from "react";
// components
import SearchForm from "./components/search-form";
import NavbarList from "./components/navbar-list";
import BurgerMenu from "./components/burger-menu";
import Sidebar from "../sidebar/sidebar";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <BurgerMenu />
          <div className="d-flex gap-3">
            <NavbarList />
            <SearchForm />
          </div>
        </div>
      </nav>
      <Sidebar />
    </>
  );
};

export default Navbar;
