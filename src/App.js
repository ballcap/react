// src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header'; // Import Header component
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import LoginForm from './LoginForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/about" element= { <About /> } />
          <Route path="/contact" element= { <Contact /> } />
        </Routes>
        <h1>Login</h1>
        <LoginForm />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
