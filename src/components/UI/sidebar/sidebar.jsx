import React from "react";
import { NavLink } from "react-router-dom";
import MyPhoto from "../../../assets/myPhoto.jpg";

const Sidebar = () => {
  return (
    <div
      className="offcanvas offcanvas-start text-bg-dark"
      style={{ maxWidth: "350px" }}
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
  );
};

export default Sidebar;
