import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Check } from "lucide-react";

const PlanCard = ({ title, price, features = [], popular = false }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleChoose = () => {
    if (!user) return navigate("/login");
    if (user.role !== "trainee") return alert("Only trainees can subscribe.");
    navigate("/payment");
  };

  return (
    <div
      className={`relative p-[2px] rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.3)] ${
        popular
          ? "bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600"
          : "bg-gradient-to-br from-gray-700 via-gray-800 to-black"
      }`}
    >
      {/* Inner card */}
      <div
        className={`rounded-2xl h-full p-8 backdrop-blur-xl ${
          popular ? "bg-black text-white" : "bg-black/95 text-white"
        }`}
      >
        {/* Popular Badge */}
        {popular && (
          <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold shadow-md">
            ★ Most Popular
          </div>
        )}

        {/* Title */}
        <h3 className="text-3xl font-extrabold tracking-wide text-center">
          {title}
        </h3>

        {/* Price */}
        <p className="mt-4 text-4xl font-bold text-center bg-gradient-to-r from-yellow-300 to-yellow-600 text-transparent bg-clip-text drop-shadow">
          {price}
        </p>

        {/* Features */}
        <ul className="mt-8 space-y-3">
          {features.map((f, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 text-gray-300 text-base"
            >
              <Check size={18} className="text-yellow-400" />
              {f}
            </li>
          ))}
        </ul>

        {/* Choose Button */}
        <button
          onClick={handleChoose}
          className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-lg shadow-lg hover:scale-105 hover:shadow-yellow-500/40 transition-all"
        >
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
