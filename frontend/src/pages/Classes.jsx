import React from "react";

const classesList = ["Yoga", "Zumba", "Strength Training", "CrossFit", "Pilates"];

const Classes = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Classes</h1>
        <p className="text-text-light mb-10">Group sessions that are fun, safe, and effective.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {classesList.map((c, i) => (
            <div key={i} className="bg-[#0f1724] p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white">{c}</h3>
              <p className="text-text-light mt-2">Join our {c} sessions — suitable for all levels.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
