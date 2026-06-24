import React from "react";

const Layout = ({ children,className="" }) => {
  return (
    <div className={`w-full z-10 ${className}`}>
      <div className="container mx-auto relative">{children}</div>
    </div>
  );
};

export default Layout;
