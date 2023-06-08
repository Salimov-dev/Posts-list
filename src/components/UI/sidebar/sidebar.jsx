import React from "react";
import CanvasHeader from "./components/canvas-header";
import CanvasBody from "./components/canvas-body";

const Sidebar = () => {
  return (
    <div
      className="offcanvas offcanvas-start text-bg-dark"
      style={{ maxWidth: "250px" }}
      tabIndex="-1"
      data-bs-backdrop="false"
      id="offcanvasDarkNavbar"
      aria-labelledby="offcanvasDarkNavbarLabel"
    >
      <CanvasHeader />
      <CanvasBody />
    </div>
  );
};

export default Sidebar;
