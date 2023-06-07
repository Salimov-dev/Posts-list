import React from "react";
import { NavLink } from "react-router-dom";
import { navbarItems } from "../../../../mockData/navbar-items";

const NavbarList = () => {
  return (
    <nav className="navbar-nav flex-row gap-3 me-3">
      {navbarItems.map((item) => {
        return (
          <li key={item._id} className="nav-item">
            <NavLink to={item.route} className="nav-link">
              {item.text}
            </NavLink>
          </li>
        );
      })}
    </nav>
  );
};

export default NavbarList;
