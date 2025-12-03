import React from "react";

export default function DashboardPreviewSection() {
  const roles = [
    {
      title: "TRAINEE",
      text: `Easily view assigned trainees, create customized workout &
diet plans, and manage your daily schedule. Mark attendance,
track trainee progress, and streamline your training workflow.
Designed to help trainers deliver personalized and effective fitness
experiences.`,
    },
    {
      title: "ADMIN",
      text: `Efficiently manage members, trainers, schedules, payments, and
attendance—all from one powerful control panel. Access real-time
analytics to track revenue, active members, and overall performance.
Stay organized with automated email/WhatsApp reminders and smart
reporting tools.`,
    },
    {
      title: "TRAINER",
      text: `Easily view assigned trainees, create customized workout &
diet plans, and manage your daily schedule. Mark attendance,
track trainee progress, and streamline your training workflow.
Designed to help trainers deliver personalized and effective fitness
experiences.`,
    },
  ];

  return (
    <section className="dash-preview">
      <div className="dash-preview-overlay" />

      <div className="dash-preview-inner">
        <header className="dash-preview-header">
          <h2 className="dash-preview-title">Everything You Need To Succeed</h2>
          <p className="dash-preview-subtitle">
            Our comprehensive platform brings all the tools you need to manage
            your fitness business efficiently.
          </p>
        </header>

        <div className="dash-preview-grid">
          {roles.map((role) => (
            <div key={role.title} className="dash-card">
              <h3 className="dash-card-title">{role.title}</h3>
              <p className="dash-card-text">{role.text}</p>
              <button className="dash-card-btn">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
