import React from "react";

const classesList = [
  {
    name: "Yoga",
    description: "Find inner peace and flexibility with our expert-led yoga sessions.",
    image: "https://tse4.mm.bing.net/th/id/OIP.6cL-3RNyqRKGLt6VmPFa3wHaEf?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "Zumba",
    description: "Dance your way to fitness with high-energy rhythms and moves.",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Strength Training",
    description: "Build muscle and power with our intensive strength programs.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "CrossFit",
    description: "Push your limits with high-intensity functional movements.",
    image: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Pilates",
    description: "Improve core strength and stability with controlled exercises.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Classes = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Classes</h1>
        <p className="text-text-light mb-10">Group sessions that are fun, safe, and effective.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {classesList.map((c, i) => (
            <div key={i} className="bg-[#0f1724] rounded-2xl overflow-hidden hover:scale-105 transition shadow-lg group">
              <div className="h-48 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white">{c.name}</h3>
                <p className="text-text-light mt-2">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
