import React from "react";

const Switch = ({name, onClick, label}) => {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        name={name}
        id={name}
        onClick={onClick}
      />
      <label className="form-check-label text-nowrap" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default Switch;
