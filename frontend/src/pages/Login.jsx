import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // Demo login sets trainee role
    login({ name: "Demo User", email, role: "trainee" });
    nav("/"); // redirect home (or dashboard)
  };

  return (
    <section className="py-24">
      <div className="max-w-md mx-auto px-6 bg-[#0b1220] p-8 rounded-2xl">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="w-full p-3 rounded-md bg-black/60 text-white" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required className="w-full p-3 rounded-md bg-black/60 text-white" />
          <button type="submit" className="w-full py-3 rounded-md bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold">Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
