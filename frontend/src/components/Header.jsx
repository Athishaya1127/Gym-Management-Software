import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-yellow-400">
          GYM<span className="text-white">X</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 text-white">
          <NavLink to="/" className="hover:text-yellow-400">Home</NavLink>
          <NavLink to="/about" className="hover:text-yellow-400">About</NavLink>
          <NavLink to="/services" className="hover:text-yellow-400">Services</NavLink>
          <NavLink to="/classes" className="hover:text-yellow-400">Classes</NavLink>
          <NavLink to="/trainers" className="hover:text-yellow-400">Trainers</NavLink>
          <NavLink to="/plans" className="hover:text-yellow-400">Plans</NavLink>
          <NavLink to="/contact" className="hover:text-yellow-400">Contact</NavLink>
        </nav>

        {/* Login & Signup */}
        <div className="hidden md:flex gap-4">
          <Link
            to="/login"
            className="px-5 py-2 rounded-md bg-white text-black font-semibold"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 rounded-md bg-yellow-400 text-black font-semibold"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
