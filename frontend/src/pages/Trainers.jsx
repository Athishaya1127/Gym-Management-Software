import React from "react";
import TrainerCard from "../components/TrainerCard";
import trainer1 from "../assets/trainers/trainer1.jpg";
import trainer2 from "../assets/trainers/trainer2.jpg";
import trainer3 from "../assets/trainers/trainer3.jpg";

const Trainers = () => {
  const trainers = [
    { name: "John Doe", speciality: "Strength Training", img: trainer1 },
    { name: "Jane Smith", speciality: "Yoga & Wellness", img: trainer2 },
    { name: "Mike Lee", speciality: "Cardio & Endurance", img: trainer3 },
  ];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Trainers</h1>
        <p className="text-text-light mb-10">Expert coaches to guide and motivate you.</p>

        <div className="flex gap-6 justify-center flex-wrap">
          {trainers.map((t, i) => <TrainerCard key={i} {...t} />)}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
