import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Custom CSS qo‘shamiz

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Task Manager</h1>
        <p className="home-subtitle">
          Manage your tasks efficiently and boost your productivity!
        </p>
        <Link to="/dashboard" className="btn btn-primary home-btn">
          Get Started
        </Link>
      </header>

      <section className="features">
        <div className="feature-card">
          <h3>📌 Easy Task Management</h3>
          <p>Organize and track your tasks with a simple and intuitive interface.</p>
        </div>
        <div className="feature-card">
          <h3>⏰ Real-time Notifications</h3>
          <p>Stay updated with task deadlines and progress.</p>
        </div>
        <div className="feature-card">
          <h3>👥 Team Collaboration</h3>
          <p>Assign tasks to your team members and track their progress.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

