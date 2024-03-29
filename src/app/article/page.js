import Link from "next/link";
import React from "react";

const Article = () => {
  return (
    <Link
      className="bg-black text-white p-3 rounded-full hover:bg-blue-400 hover:shadow-2xl "
      href="/"
    >
      Article
    </Link>
  );
};

export default Article;
