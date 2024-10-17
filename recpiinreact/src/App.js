import React, { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Location from './components/Location';
import Herosection from './components/Herosection';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IoMail } from "react-icons/io5";
import Cart from './components/Cart';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleRegister = (user) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('user', JSON.stringify(user));
    setIsLoggedIn(true);
  };

  const handleLogin = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <div>
        <Routes>
          <Route exact path="/" element={<Herosection />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/location" element={<Location />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact text="VIA EMAIL FORM" icon={<IoMail style={{ marginLeft: '15px', marginTop: "0px", fontSize: "20px" }} />} />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/login" element={isLoggedIn ? <Herosection /> : <Login onLogin={handleLogin} />} />
          <Route exact path="/register" element={isLoggedIn ? <Herosection /> : <RegisterForm onRegister={handleRegister} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
