import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 z-50">
      <div className="absolute inset-0 bg-black opacity-35 blur-sm rounded-tr-xl rounded-tl-xl"></div>

      <header className="relative font-mono text-lg z-10 flex items-center justify-center h-full text-white p-5">
        <Link href="/">Alberto Sierra</Link>
      </header>
    </div>
  );
};

export default Header;
