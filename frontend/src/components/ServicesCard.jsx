import React from "react";

/* Inline custom SVG icons for the three services */
const IconDumbbell = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="10" width="4" height="4" rx="1" />
    <rect x="19" y="10" width="4" height="4" rx="1" />
    <rect x="6" y="9" width="12" height="6" rx="1" />
  </svg>
);

const IconGroup = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 11a4 4 0 1 0-8 0" />
    <circle cx="12" cy="6" r="2" />
    <path d="M2 20a6 6 0 0 1 12 0" />
    <path d="M14 20a6 6 0 0 1 12 0" transform="translate(-12 0)" />
  </svg>
);

const IconNutrition = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M7 9h10" />
    <path d="M7 13h6" />
  </svg>
);

const ServicesCard = ({ title, description, icon = "dumbbell" }) => {
  const Icon = icon === "group" ? IconGroup : icon === "nutrition" ? IconNutrition : IconDumbbell;

  return (
    <div className="bg-[#121212] rounded-2xl p-8 shadow-lg w-full md:w-80 hover:scale-105 transition">
      <div className="text-white mb-6">
        <Icon />
      </div>
      <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
      <p className="text-text-light leading-relaxed">{description}</p>
    </div>
  );
};

export default ServicesCard;
