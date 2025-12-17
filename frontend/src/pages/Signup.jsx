import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const nav = useNavigate();
  const { register } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "trainee" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await register(form.name, form.email, form.password, form.role);

    if (result.success) {
      // Redirect based on role
      switch (result.user.role) {
        case "admin":
          nav("/dashboard/admin");
          break;
        case "trainer":
          nav("/dashboard/trainer");
          break;
        case "trainee":
          nav("/dashboard/trainee");
          break;
        default:
          nav("/");
      }
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 mb-4">
              <span className="text-3xl font-black text-white">GX</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Join GymX</h1>
            <p className="text-gray-500 text-sm">Create your account</p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200">
              <p className="text-red-600 text-sm text-center">{error}</p>
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input 
                name="name" 
                value={form.name} 
                onChange={onChange} 
                placeholder="Enter your full name" 
                required 
                className="w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-900 border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition placeholder:text-gray-400" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input 
                name="email" 
                value={form.email} 
                onChange={onChange} 
                type="email" 
                placeholder="abc@gmail.com" 
                required 
                className="w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-900 border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition placeholder:text-gray-400" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input 
                name="password" 
                value={form.password} 
                onChange={onChange} 
                type="password" 
                placeholder="••••••••" 
                required 
                className="w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-900 border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition placeholder:text-gray-400" 
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                I am a...
              </label>
              <select 
                name="role" 
                value={form.role} 
                onChange={onChange} 
                className="w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-900 border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition"
              >
                <option value="trainee">Trainee (Gym Member)</option>
                <option value="trainer">Trainer</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:text-blue-600 font-semibold">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
