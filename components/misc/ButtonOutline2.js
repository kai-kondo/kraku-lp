import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-green-500 text-white-500 bg-green-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-white-500 hover:text-green-500 transition-all hover:shadow-orange ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
