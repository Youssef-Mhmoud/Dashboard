import React from "react";

const Button = ({ bgColor, color, borderRadius, text, size }) => {
  return (
    <button
      type="button"
      style={{ background: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl duration-300`}
    >
      {text}
    </button>
  );
};

export default Button;
