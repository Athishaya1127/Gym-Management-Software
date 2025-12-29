import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LogIn } from "lucide-react";

const Login = () => {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await login(email, password);

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
            <h1 className="text-3xl font-bold text-white mb-2">GymX</h1>
            <p className="text-zinc-400 text-sm">Gym Management System</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
              <p className="text-red-400 text-sm text-center">{error}</p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-zinc-300 mb-2">
                Email Address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 text-white border border-zinc-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition placeholder:text-zinc-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-zinc-300 mb-2">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 text-white border border-zinc-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition placeholder:text-zinc-600"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <LogIn size={20} />
              <span>{loading ? "Signing in..." : "Sign In"}</span>
            </button>
          </form>

          <div className="mt-8 text-center bg-zinc-900/30 -mx-10 -mb-10 p-6 rounded-b-3xl border-t border-zinc-700/50">
            <p className="text-zinc-400 text-sm">
              Don't have an account?{" "}
              <a href="/signup" className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors">
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
