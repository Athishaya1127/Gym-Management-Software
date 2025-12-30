import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Navbar />
      <main className="pt-navbar flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
