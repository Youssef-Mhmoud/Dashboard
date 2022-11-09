import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Button = ({ bgColor, color, borderRadius, text, size, bgHover, width }) => {

  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ background: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl duration-300 hover:bg-${bgHover} w-${width}`}
    >
      {text}
    </button>
  );
};

export default Button;
