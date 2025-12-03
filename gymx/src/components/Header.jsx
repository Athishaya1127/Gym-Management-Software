import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="gx-navbar">
      <div className="gx-logo">
        <Link to="/" className="gx-logo-main">
          gymX
        </Link>
      </div>

      <nav className="gx-nav-links">
        <Link to="/" className="active">
          Home
        </Link>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#membership">Memberships</a>
        <a href="#classes">Classes</a>
        <a href="#trainers">Trainers</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="gx-nav-actions">
        {/* optional separate sign up button */}
        <Link to="/signup" className="btn btn-outline">
          Sign Up
        </Link>
        <Link to="/signup" className="btn btn-primary">
          Join Now
        </Link>
      </div>
    </header>
  );
}
