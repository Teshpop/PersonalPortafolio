import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="absolute w-full h-[90%] backdrop-blur-sm flex justify-center items-center z-10">
      <div className="bg-zinc-800 bg-opacity-[0.7] h-[85%] w-[85%] rounded-[20px] flex justify-center items-center flex-col">
        {children}
      </div>
    </div>
  );
};

export default Layout;
