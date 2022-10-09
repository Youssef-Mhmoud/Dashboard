import React from "react";

const Header = ({ category, title }) => {
  const textColor = () => {
    if (category !== "App" && category !== "Page") {
      return "dark:text-white";
    }
  };

  return (
    <div className="mb-10">
      <p className="text-gray-400">{category}</p>
      <p className={`text-3xl font-extrabold tracking-tight text-slate-900 ${textColor()}`}>
        {title}
      </p>
    </div>
  );
};

export default Header;
