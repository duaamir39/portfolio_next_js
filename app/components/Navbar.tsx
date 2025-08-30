"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
        >
          MyPortfolio
        </Link>
        <div className="hidden md:flex space-x-8 font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "Skills", path: "/skills" },
            { name: "Projects", path: "/projects" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="relative text-gray-300 hover:text-pink-400 transition duration-300 group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        <button className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
          ☰
        </button>
      </div>
    </nav>
  );
}
