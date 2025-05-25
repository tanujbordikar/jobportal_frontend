import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import './App.css';
import Register1 from './components/Register1';
import Login1 from './components/Login1';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Header from './components/Header';

function App() {
    const user = JSON.parse(localStorage.getItem('userData'));

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route
                    path="/register"
                    element={!user ? <Register1 /> : <Navigate to="/dashboard" />}
                />
                <Route
                    path="/login"
                    element={!user ? <Login1 /> : <Navigate to="/dashboard" />}
                />
                <Route index element={<Home />} />
                <Route
                    path="/dashboard"
                    element={user ? <Dashboard /> : <Navigate to="/login" />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;