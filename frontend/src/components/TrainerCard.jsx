import React from "react";

const TrainerCard = ({ name, speciality, img }) => {
  return (
    <div className="bg-[#0f1724] rounded-2xl overflow-hidden shadow-lg w-72">
      <div className="h-44 w-full">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 text-white">
        <h5 className="font-semibold">{name}</h5>
        <p className="text-text-light text-sm">{speciality}</p>
      </div>
    </div>
  );
};

export default TrainerCard;
