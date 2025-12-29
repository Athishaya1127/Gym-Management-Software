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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-900 to-black py-12 px-4">
      <div className="w-full max-w-md">
        <div className="bg-zinc-800/50 backdrop-blur-md rounded-3xl shadow-xl border border-zinc-700/50 p-10">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 mb-4 shadow-lg shadow-orange-500/20">
              <span className="text-3xl font-black text-white">GX</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Join GymX</h1>
            <p className="text-zinc-400 text-sm">Create your account to get started</p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
              <p className="text-red-400 text-sm text-center">{error}</p>
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-zinc-300 mb-2">
                Full Name
              </label>
              <input 
                name="name" 
                value={form.name} 
                onChange={onChange} 
                placeholder="Enter your full name" 
                required 
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 text-white border border-zinc-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition placeholder:text-zinc-600" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-zinc-300 mb-2">
                Email Address
              </label>
              <input 
                name="email" 
                value={form.email} 
                onChange={onChange} 
                type="email" 
                placeholder="abc@gmail.com" 
                required 
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 text-white border border-zinc-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition placeholder:text-zinc-600" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-zinc-300 mb-2">
                Password
              </label>
              <input 
                name="password" 
                value={form.password} 
                onChange={onChange} 
                type="password" 
                placeholder="••••••••" 
                required 
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 text-white border border-zinc-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition placeholder:text-zinc-600" 
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-zinc-300 mb-2">
                I am a...
              </label>
              <select 
                name="role" 
                value={form.role} 
                onChange={onChange} 
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 text-white border border-zinc-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition"
              >
                <option value="trainee" className="bg-zinc-800">Trainee (Gym Member)</option>
                <option value="trainer" className="bg-zinc-800">Trainer</option>
                <option value="admin" className="bg-zinc-800">Admin</option>
              </select>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>
          </form>

          <div className="mt-8 text-center bg-zinc-900/30 -mx-10 -mb-10 p-6 rounded-b-3xl border-t border-zinc-700/50">
            <p className="text-zinc-400 text-sm">
              Already have an account?{" "}
              <a href="/login" className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
