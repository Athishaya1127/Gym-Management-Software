import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide text-secondary"
        >
          FIT<span className="text-white">CLUB</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg font-medium text-white">
          <NavLink to="/" className="hover:text-secondary transition">Home</NavLink>
          <NavLink to="/about" className="hover:text-secondary transition">About</NavLink>
          <NavLink to="/services" className="hover:text-secondary transition">Services</NavLink>
          <NavLink to="/classes" className="hover:text-secondary transition">Classes</NavLink>
          <NavLink to="/trainers" className="hover:text-secondary transition">Trainers</NavLink>
          <NavLink to="/membership-plans" className="hover:text-secondary transition">Plans</NavLink>
          <NavLink to="/contact" className="hover:text-secondary transition">Contact</NavLink>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="px-5 py-2 rounded-lg border border-secondary text-secondary hover:bg-secondary hover:text-black transition font-semibold"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 rounded-lg bg-secondary text-black font-semibold hover:bg-accent transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl font-bold"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 px-6 py-5 flex flex-col gap-4 text-lg font-medium text-white border-t border-white/10">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
          <NavLink to="/classes" onClick={() => setOpen(false)}>Classes</NavLink>
          <NavLink to="/trainers" onClick={() => setOpen(false)}>Trainers</NavLink>
          <NavLink to="/membership-plans" onClick={() => setOpen(false)}>Plans</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>

          <hr className="border-white/20" />

          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="py-2 text-secondary border border-secondary rounded-md text-center"
          >
            Login
          </Link>
          <Link
            to="/signup"
            onClick={() => setOpen(false)}
            className="py-2 bg-secondary text-black rounded-md text-center"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
