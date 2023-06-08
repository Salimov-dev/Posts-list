import React from "react";

const CanvasHeader = () => {
  return (
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
  );
};

export default CanvasHeader;
