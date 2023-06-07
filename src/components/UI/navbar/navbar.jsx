import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MyPhoto from "../../../assets/myPhoto.jpg";
import { navbarItems } from "../../../mockData/navbar-items";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="d-flex gap-3">
            <nav className="navbar-nav flex-row gap-3">
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

            <form className="d-flex" role="search">
              <input
                className="form-control-sm me-2 "
                type="search"
                placeholder="Найти по заголовку"
                aria-label="Поиск"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-outline-success btn-sm" type="submit">
                Поиск
              </button>
            </form>
          </div>

          <div
            className="offcanvas offcanvas-start text-bg-dark"
            style={{maxWidth: "350px"}}
            tabIndex="-1"
            data-bs-backdrop="false"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Салимов Руслан
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <div className="d-flex gap-2 mb-3">
                <button className="btn btn-outline-info mb-1 w-100">
                  <NavLink className="nav-link" to="/developer">
                    Список постов
                  </NavLink>
                </button>
                <button className="btn btn-outline-warning mb-1 w-100">
                  <NavLink className="nav-link" to="/developer">
                    О разработчике
                  </NavLink>
                </button>
              </div>

              <img src={MyPhoto} alt="Avatar" className="mb-3 rounded w-100" />
              <div className="d-flex flex-column align-items-center">
                <p>E-mail: salimov.rent@mail.ru</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
