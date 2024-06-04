// src/Header.js
import React from 'react';
import Nav from './Nav';
import './Header.css'

function Header() {
  return (
    <header>
        <div>
            <img src="https://images.unsplash.com/photo-1715353500115-51fce92308d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" alt="header-logo" />
        </div>
        <div>
            <Nav />
        </div>
    </header>
  );
}

export default Header;