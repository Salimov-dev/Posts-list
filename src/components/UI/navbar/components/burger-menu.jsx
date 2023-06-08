import React from 'react';

const BurgerMenu = () => {
    return <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasDarkNavbar"
    aria-controls="offcanvasDarkNavbar"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon burger__icon"></span>
  </button>
}
 
export default BurgerMenu;