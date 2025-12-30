import React from "react";
import { Link } from "react-router-dom";
import ServicesCard from "../components/ServicesCard";

const services = [
  {
    title: "Personal Training",
    desc: "One-on-one sessions tailored by certified fitness experts to match your body goals.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Group Classes",
    desc: "Energetic and fun sessions including Yoga, Zumba, HIIT, and Strength Training.",
    image: "https://rhsballina.com.au/wp-content/uploads/2021/07/gym-ballina-fitness-classes-ballina.jpg",
    link: "/classes"
  },
  {
    title: "Nutrition Plans",
    desc: "Scientifically structured diet plans to support fat loss, muscle gain, and overall health.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
];

const Services = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-32 pb-12 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Dark Overlay for section text readability */}
      <div className="absolute inset-0 bg-black/85"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Our Services</h1>
        <p className="text-zinc-400 mb-10">Comprehensive programs and classes that cater to all fitness levels.</p>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {services.map((s, i) => (
            s.link ? (
              <Link key={i} to={s.link} className="block w-full md:w-80">
                <ServicesCard title={s.title} description={s.desc} icon={i === 0 ? "dumbbell" : i === 1 ? "group" : "nutrition"} image={s.image} />
              </Link>
            ) : (
              <div key={i} className="w-full md:w-80">
                <ServicesCard title={s.title} description={s.desc} icon={i === 0 ? "dumbbell" : i === 1 ? "group" : "nutrition"} image={s.image} />
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
