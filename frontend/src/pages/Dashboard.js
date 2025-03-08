import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTasks, FaPlusCircle, FaCheckCircle, FaHourglassHalf } from "react-icons/fa";
import axios from "axios";
import "./Dashboard.css"; // Custom CSS qo‘shamiz

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/tasks/lcview/")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>📋 Task Dashboard</h1>
        <Link to="/add-task" className="btn btn-primary add-task-btn">
          <FaPlusCircle /> Add New Task
        </Link>
      </header>

      <section className="task-list">
        {tasks.length === 0 ? (
          <p className="no-tasks">No tasks available. Start adding new tasks!</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="task-card">
              <h3>{task.title}</h3>
              <p>{task.description || "No description provided."}</p>
              <div className="task-status">
                {task.status === "todo" && <FaHourglassHalf className="status-icon pending" />}
                {task.status === "inprogress" && <FaTasks className="status-icon progress" />}
                {task.status === "done" && <FaCheckCircle className="status-icon completed" />}
                <span className={`status-label ${task.status}`}>{task.status.toUpperCase()}</span>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Dashboard;

