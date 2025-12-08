import React from "react";

const About = () => {
  return (
    <section className="pt-24 pb-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-8 text-yellow-400">
          About Us
        </h1>

        {/* Intro Paragraph */}
        <p className="text-lg leading-8 text-gray-300 text-center mb-12">
          At <span className="text-yellow-400 font-semibold">Your Gym Name</span>, 
          we believe fitness is more than a routine—it's a lifestyle, a mindset, 
          and a commitment to becoming the strongest version of yourself. Our 
          mission is to help you achieve real transformation through expert 
          guidance, world-class facilities, and a supportive fitness community.
        </p>

        {/* Mission Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-7">
            Our mission is to inspire individuals to transform their bodies and minds. 
            We offer professional coaching, a motivating atmosphere, and the tools you 
            need to stay consistent and disciplined throughout your journey.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Why Choose Us?</h2>

          <ul className="space-y-3 text-gray-300">
            <li>✔ Certified and experienced trainers</li>
            <li>✔ Modern equipment and workout systems</li>
            <li>✔ Clean, safe, and hygienic environment</li>
            <li>✔ Budget-friendly and flexible membership plans</li>
            <li>✔ Supportive community that keeps you motivated</li>
          </ul>
        </div>

        {/* Vision Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Our Vision</h2>
          <p className="text-gray-300 leading-7">
            We aim to redefine the fitness experience by providing a space where 
            people feel confident, motivated, and equipped to reach extraordinary 
            goals. We strive to be the most trusted and result-driven fitness center 
            in the community.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">What We Offer</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            <p>• Strength & Conditioning</p>
            <p>• Cardio Training</p>
            <p>• Functional Workouts</p>
            <p>• Personal Training</p>
            <p>• Weight Loss Programs</p>
            <p>• Nutrition Guidance</p>
            <p>• Group Fitness Sessions</p>
            <p>• Body Transformation Challenges</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            Start Your Fitness Journey Today
          </h3>
          <p className="text-gray-300 mb-6">
            Join us and take the first step towards transforming your body, mind, 
            and lifestyle.
          </p>
          <a
            href="/plans"
            className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all"
          >
            View Membership Plans
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
