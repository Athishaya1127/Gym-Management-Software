import React from "react";
import PlanCard from "../components/PlanCard";

const MembershipPlans = () => {
  const plans = [
    { title: "Basic", price: "₹999 / month", features: ["Gym Access", "Locker"] },
    { title: "Standard", price: "₹1499 / month", features: ["Unlimited Classes", "2 PT Sessions"], popular: true },
    { title: "Premium", price: "₹1999 / month", features: ["Dedicated Trainer", "Custom Diet"] },
  ];

  return (
    <section className="py-24 bg-black/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Membership Plans</h1>
        <p className="text-text-light mb-10">Flexible plans to suit beginners and pros alike.</p>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {plans.map((p, idx) => <PlanCard key={idx} {...p} />)}
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
