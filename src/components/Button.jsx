import React from "react";

const Button = ({ borderr, setState, changeTo, text }) => {
  return (
    <>
      {changeTo ? (
        <button
          style={{ cursor: "pointer" }}
          className={`custom-button ${borderr}`}
          onClick={() => setState(changeTo)}
        >
          {text}
        </button>
      ) : (
        <button
          style={{ cursor: "pointer" }}
          className={`custom-button ${borderr}`}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
