import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll reach out soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-24 bg-black/5">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-text-light text-center mb-8">Questions? Reach out and we'll reply shortly.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="w-full p-3 rounded-md bg-[#0b1220] border border-gray-800 text-white" />
          <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" required className="w-full p-3 rounded-md bg-[#0b1220] border border-gray-800 text-white" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required rows="6" className="w-full p-3 rounded-md bg-[#0b1220] border border-gray-800 text-white"></textarea>
          <div className="text-center">
            <button type="submit" className="px-6 py-3 rounded-md bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
