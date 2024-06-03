// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header'; // Import Header component
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/about" element= { <About /> } />
          <Route path="/contact" element= { <Contact /> } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;