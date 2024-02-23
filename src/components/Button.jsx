import React from "react";

const Button = ({ borderr, setState, changeTo }) => {
  return (
    <input
      type="submit"
      className={`custom-button ${borderr}`}
      onClick={() => setState(changeTo)}
    />
  );
};

export default Button;
