import React from "react";
import "./Button.scss";

export const Button = (props) => {
  return (
    <button className="btn1" {...props}>
      {props.children}
    </button>
  );
};
