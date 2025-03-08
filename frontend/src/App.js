import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CreateTask from './pages/CreateTask';
import ChangePassword from "./pages/ChangePassword";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/add-task" element={<CreateTask />} /> {/* ✅ Yangi sahifa qo‘shildi */}
                    <Route path="/change-password" element={<ChangePassword />} /> {/* ✅ Change Password */}
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;



