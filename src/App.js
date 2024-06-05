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
import FormName from './FormName';
import ResultComponent from './ResultComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/result" element= { <ResultComponent /> } />
          <Route path="/about" element= { <About /> } />
          <Route path="/contact" element= { <Contact /> } />
        </Routes>
        <LoginForm />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
