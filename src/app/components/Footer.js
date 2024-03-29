import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-16 z-50">
      <div className="absolute inset-0 bg-black opacity-35 blur-sm rounded-tr-xl rounded-tl-xl"></div>

      <footer className="relative z-10 flex items-center justify-center h-full text-white p-5">
        Footer
      </footer>
    </div>
  );
};

export default Footer;
