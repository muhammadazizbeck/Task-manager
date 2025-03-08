import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreateTask.css"; // Stil fayli

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [tasks, setTasks] = useState([]); // ✅ Backenddan kelgan tasklar
  const navigate = useNavigate();

  // ✅ Backenddan vazifalar ro‘yxatini olish
  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/tasks/lcview/");
      setTasks(response.data); // API'dan kelgan tasklarni state'ga saqlaymiz
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    }
  };

  useEffect(() => {
    fetchTasks(); // ✅ Sahifa yuklanganda faqat bir marta ishlaydi
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8000/api/tasks/lcview/", {
        title: title,
        description: description,
        due_date: dueDate,
        status: "todo",
        project: 1, // Hozircha 1 qilib qo‘yamiz
        assignee: 2, // Hozircha 2 qilib qo‘yamiz
      });

      setTitle(""); // Formani tozalash
      setDescription("");
      setDueDate("");
      
      fetchTasks(); // ✅ Yangi task qo‘shilgandan keyin ro‘yxatni yangilash
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    }
  };

  return (
    <div className="create-task-container">
      <h2>📝 Yangi Vazifa Qo‘shish</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        <label>Due Date:</label>
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />

        <button type="submit" className="btn btn-success">Create Task</button>
      </form>
    </div>
  );
};

export default CreateTask;

