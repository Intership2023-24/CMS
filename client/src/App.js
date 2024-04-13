import logo from './logo.svg';
import './App.css';
import React from 'react'; // Note: Common convention is to use "React" instead of "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ContactDetails from './pages/ContactDetails.';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactdetails" element={<ContactDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
