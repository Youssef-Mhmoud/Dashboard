import React from "react";

const Button = ({ bgColor, color, borderRadius, text, size, bgHover }) => {
  return (
    <button
      type="button"
      style={{ background: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl duration-300 hover:bg-${bgHover}`}
    >
      {text}
    </button>
  );
};

export default Button;
