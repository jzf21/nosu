import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`fixed w-full z-50 py-4 px-6 transition-colors duration-300 ${
          isScrolled
            ? " backdrop-blur-lg bg-black/10	border-b border-slate-800"
            : "bg-transparent border-b  border-slate-800"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold cursor-pointer">
            <Link to="/">CyberSec</Link>
          </div>

          <ul className="hidden md:flex space-x-10 text-white text-lg">
            <li className="hover:opacity-80 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:opacity-80 cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:opacity-80 cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="hidden md:block">
            <Link to="/signup">
              <button className="px-4 py-2 font-medium bg-yellow-400 text-black rounded hover:opacity-80">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}