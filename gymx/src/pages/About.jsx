import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">

      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <h1 className="about-title">Train. Track. Thrive.</h1>
          <p className="about-subtext">
            Empowering modern gyms with the technology they need to operate smarter, grow faster, 
            and deliver exceptional fitness experiences.
          </p>
          <div className="about-buttons">
            <button className="about-btn-primary">Start Free Trial</button>
            <button className="about-btn-secondary">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <h2 className="section-heading">About gymX</h2>
        <p className="section-description">
          gymX is a complete fitness management solution built for modern gyms, fitness studios, and 
          personal trainers. Our mission is simple—help fitness businesses run efficiently and provide 
          smarter, more personalized experiences to their members.  
          <br /><br />
          We bring powerful digital tools like automated scheduling, smart analytics, attendance tracking, 
          membership management, trainer dashboards, and more into one unified platform.
        </p>
      </section>

      {/* MISSION AND VISION */}
      <section className="mv-section">
        <div className="mv-card">
          <h3>Our Mission</h3>
          <p>
            To simplify gym operations with modern digital tools, allowing gym owners and trainers to focus on 
            what matters most—helping members achieve their fitness goals.
          </p>
        </div>

        <div className="mv-card">
          <h3>Our Vision</h3>
          <p>
            To become the most trusted global fitness management platform, creating seamless experiences 
            for trainees, trainers, and gym owners.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <h2 className="section-heading">Why Choose gymX?</h2>

        <div className="why-grid">

          <div className="why-card">
            <h4>Smart Automation</h4>
            <p>Automate attendance, reminders, scheduling, payments, and more.</p>
          </div>

          <div className="why-card">
            <h4>Powerful Analytics</h4>
            <p>Track revenue, member growth, trainer performance, and gym insights.</p>
          </div>

          <div className="why-card">
            <h4>All-In-One Platform</h4>
            <p>Everything your gym needs—memberships, trainers, trainees, workouts, reports.</p>
          </div>

          <div className="why-card">
            <h4>Seamless Experience</h4>
            <p>Simple, beautiful UI designed for both trainers and members.</p>
          </div>

        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team-section">
        <h2 className="section-heading">Meet Our Team</h2>

        <div className="team-grid">

          <div className="team-card">
            <div className="team-img-placeholder"></div>
            <h4>Alex Johnson</h4>
            <p>Founder & Lead Trainer</p>
          </div>

          <div className="team-card">
            <div className="team-img-placeholder"></div>
            <h4>Maria Smith</h4>
            <p>Fitness Consultant</p>
          </div>

          <div className="team-card">
            <div className="team-img-placeholder"></div>
            <h4>Daniel Lee</h4>
            <p>Operations Manager</p>
          </div>

        </div>
      </section>

    </div>
  );
}
