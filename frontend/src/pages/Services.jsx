import React from "react";
import ServicesCard from "../components/ServicesCard";

const services = [
  {
    title: "Personal Training",
    desc: "One-on-one sessions tailored by certified fitness experts to match your body goals.",
  },
  {
    title: "Group Classes",
    desc: "Energetic and fun sessions including Yoga, Zumba, HIIT, and Strength Training.",
  },
  {
    title: "Nutrition Plans",
    desc: "Scientifically structured diet plans to support fat loss, muscle gain, and overall health.",
  },
];

const Services = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-text-light mb-10">Comprehensive programs and classes that cater to all fitness levels.</p>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {services.map((s, i) => <ServicesCard key={i} title={s.title} description={s.desc} icon={i === 0 ? "dumbbell" : i === 1 ? "group" : "nutrition"} />)}
        </div>
      </div>
    </section>
  );
};

export default Services;
