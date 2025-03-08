import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://127.0.0.1:8000/api/auth/change-password/",
        { old_password: oldPassword, new_password: newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("✅ Password changed successfully!");
      navigate("/");
    } catch (error) {
      alert("❌ Error changing password");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>🔑 Change Password</h2>
      <form onSubmit={handleSubmit}>
        <label>Old Password:</label>
        <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required />

        <label>New Password:</label>
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />

        <button type="submit" className="btn btn-primary">Change Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;


