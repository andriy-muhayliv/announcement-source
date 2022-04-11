import React from "react";

const Container = ({ children }) => {
  return (
    <div className={`max-w-7xl w-full px-4 md:px-10 pt-20 pb-10 mx-auto`}>
      {children}
    </div>
  );
};

export default Container;
