import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="relative pt-24 pb-16 min-h-screen bg-[url('https://i.pinimg.com/736x/76/c7/6a/76c76a7a19d36104ad013fe959f5f8ef.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/85"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Intro Section - Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column: Text */}
          <div className="text-left">
            <h1 className="text-5xl font-bold mb-6 text-yellow-400">
              About Us
            </h1>
            <p className="text-lg leading-8 text-gray-200 mb-8">
              At <span className="text-yellow-400 font-semibold">FitClub</span>,
              fitness is a journey, not a destination. We provide the equipment,
              coaching, and community you need to push past your limits and discover
              your true potential.
            </p>
            <Link
              to="/membership-plans"
              className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-all inline-block shadow-lg hover:shadow-yellow-500/20"
            >
              View Membership Plans
            </Link>
          </div>

          {/* Right Column: Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Gym Interior"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </div>

        {/* Details Section - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Mission Card */}
          <div className="bg-black/60 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-yellow-400/50 transition">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-7">
              To inspire transformation through expert coaching and a motivating environment. We give you the tools to stay disciplined and consistent.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-black/60 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-yellow-400/50 transition">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-7">
              Redefining fitness by creating a space where everyone feels empowered to reach extraordinary goals and become their best self.
            </p>
          </div>

          {/* Why Choose Us Card */}
          <div className="bg-black/60 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-yellow-400/50 transition">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Why Choose Us?</h2>
            <ul className="space-y-2 text-gray-300">
              <li>✔ Expert Trainers</li>
              <li>✔ Modern Equipment</li>
              <li>✔ Hygienic Space</li>
              <li>✔ Flexible Plans</li>
              <li>✔ Supportive Community</li>
            </ul>
          </div>

        </div>

        {/* What We Offer - Full Width */}
        <div className="mt-20 bg-black/60 backdrop-blur-md p-10 rounded-3xl border border-white/10 text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8">What We Offer</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-lg font-medium text-gray-200">
            <p>• Strength Training</p>
            <p>• Cardio Zone</p>
            <p>• Functional Area</p>
            <p>• Personal Training</p>
            <p>• Weight Loss</p>
            <p>• Nutrition Plans</p>
            <p>• Group Classes</p>
            <p>• 24/7 Access</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
