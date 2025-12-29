import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold drop-shadow-lg leading-tight">
          PUSH HARDER.
          <br />
          GO FURTHER.
        </h1>

        <p className="text-text-light mt-6 text-lg max-w-3xl mx-auto">
          Train with world-class coaches, elevate your strength, and unlock your peak potential.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            to="/signup"
            className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg shadow-md hover:bg-yellow-500 transition-colors"
          >
            Join Now
          </Link>
          <Link
            to="/membership-plans"
            className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Explore Plans
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
