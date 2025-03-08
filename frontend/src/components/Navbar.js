import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"; // Stil fayli

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // ✅ Logout funksiyasi
  const handleLogout = () => {
    localStorage.removeItem("token"); // Tokenni o‘chirish
    navigate("/login"); // Logoutdan keyin login sahifasiga yo‘naltirish
  };

  return (
    <nav className="navbar">
      <div className="container">
        <h2 className="logo">🚀 Task Manager</h2>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/add-task" className="btn btn-primary">+ Add Task</Link>
          </li>

          {/* 🔹 Profile menyusi */}
          <li className="profile-menu">
            <button 
              className="profile-btn" 
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              👤 Profile ▾
            </button>
            {dropdownOpen && (
              <ul className="dropdown">
                <li><Link to="/change-password">🔑 Change Password</Link></li>
                <li><button onClick={handleLogout} className="logout-btn">🚪 Logout</button></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;




