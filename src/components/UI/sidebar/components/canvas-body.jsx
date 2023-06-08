import React from "react";
import MyPhoto from "../../../../assets/ava.png";
import { NavLink } from "react-router-dom";

const CanvasBody = () => {
  return (
    <div className="offcanvas-body">
      <div className="d-flex flex-column gap-2 mb-3">
        <img src={MyPhoto} alt="Avatar" className="mb-3 rounded w-100" />
        <button
          className="btn btn-outline-info mb-1 w-100"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <NavLink className="nav-link" to="/">
            Список постов
          </NavLink>
        </button>
        <button
          className="btn btn-outline-warning mb-1 w-100"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <NavLink className="nav-link" to="/developer">
            О разработчике
          </NavLink>
        </button>
      </div>

      <div className="d-flex flex-column align-items-center">
        <p>salimov.rent@mail.ru</p>
      </div>
    </div>
  );
};

export default CanvasBody;
