import React, { Fragment } from "react";

import "./Input.scss";

const Input = ({ label, ...props }) => {
  return (
    <Fragment>
      <label>{label}</label>
      <input className="input" {...props} />
    </Fragment>
  );
};

export default Input;
