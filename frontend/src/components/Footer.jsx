import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p>© 2025 <span className="font-bold">GYMFIT</span>. All rights reserved.</p>
        <p className="mt-2">
          Follow us:{" "}
          <a href="#" className="mx-2 hover:text-secondary">Facebook</a>|
          <a href="#" className="mx-2 hover:text-secondary">Instagram</a>|
          <a href="#" className="mx-2 hover:text-secondary">Twitter</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
