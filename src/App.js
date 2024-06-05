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
          <Route path="/v00/06052024/result" element= { <ResultComponent /> } />
          <Route path="/v00/about" element= { <About /> } />
          <Route path="/v00/contact" element= { <Contact /> } />
        </Routes>
        <FormName />
        <LoginForm />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
