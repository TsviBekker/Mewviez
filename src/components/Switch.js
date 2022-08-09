import React from "react";
import "./Switch.scss";

export const Switch = ({ onChange, color = true }) => {
  return (
    <div className={color && "color"}>
      <label className="switch">
        <input type="checkbox" onChange={onChange} />
        <span className="slider"></span>
      </label>
    </div>
  );
};
