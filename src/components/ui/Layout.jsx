import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-full pb-16 z-10">
      <div className="container mx-auto relative">{children}</div>
    </div>
  );
};

export default Layout;
