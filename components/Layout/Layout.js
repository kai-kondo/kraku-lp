import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-gradient-to-b from-white-500 to-white-300 w-full py-14">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
