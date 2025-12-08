import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const nav = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Signup successful! Please login.");
    nav("/login");
  };

  return (
    <section className="py-24">
      <div className="max-w-md mx-auto px-6 bg-[#0b1220] p-8 rounded-2xl">
        <h1 className="text-2xl font-bold mb-4">Create account</h1>

        <form onSubmit={onSubmit} className="space-y-4">
          <input name="name" value={form.name} onChange={onChange} placeholder="Full name" required className="w-full p-3 rounded-md bg-black/60 text-white" />
          <input name="email" value={form.email} onChange={onChange} type="email" placeholder="Email" required className="w-full p-3 rounded-md bg-black/60 text-white" />
          <input name="password" value={form.password} onChange={onChange} type="password" placeholder="Password" required className="w-full p-3 rounded-md bg-black/60 text-white" />
          <button type="submit" className="w-full py-3 rounded-md bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold">Sign up</button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
