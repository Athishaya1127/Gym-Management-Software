import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Trainers = () => {
  const trainers = [
    {
      name: "John Doe",
      speciality: "Strength & Conditioning",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Jane Smith",
      speciality: "Yoga & Mindfulness",
      image: "https://wallpaperaccess.com/full/1108002.jpg"
    },
    {
      name: "Mike Lee",
      speciality: "CrossFit Expert",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <section className="relative py-24 min-h-screen bg-[url('https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/85"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Meet Our <span className="text-yellow-400">Coaches</span></h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our certified trainers are here to guide, motivate, and push you to your limits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {trainers.map((t, i) => (
            <div key={i} className="group relative bg-[#0f1724] rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 border border-white/10 hover:border-yellow-400 shadow-xl">

              {/* Image Container */}
              <div className="h-96 overflow-hidden relative">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
                />

                {/* Social Overlay (appears on hover) */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  <a href="#" className="p-3 bg-yellow-400 text-black rounded-full hover:bg-white transition"><Facebook size={20} /></a>
                  <a href="#" className="p-3 bg-yellow-400 text-black rounded-full hover:bg-white transition"><Instagram size={20} /></a>
                  <a href="#" className="p-3 bg-yellow-400 text-black rounded-full hover:bg-white transition"><Twitter size={20} /></a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center bg-black">
                <h3 className="text-2xl font-bold text-white mb-1">{t.name}</h3>
                <p className="text-yellow-400 font-medium tracking-wide text-sm uppercase">{t.speciality}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
