import React from "react";
import Hero from "../components/Hero";
import Services from "../pages/Services"; // or a small preview
import Classes from "../pages/Classes";
import MembershipPlans from "./MembershipPlans";
import Contact from "./Contact";
import Trainers from"./Trainers";
const Home = () => {
  return (
    <div>
      <Hero /> {/* background image + join/signup buttons */}
      
      {/* Example sections below hero */}
      <Services /> 
      <MembershipPlans/>
      <Trainers/>
      <Classes />
      
      <Contact/>
    </div>
  );
};

export default Home;
