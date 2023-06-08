import React from "react";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
