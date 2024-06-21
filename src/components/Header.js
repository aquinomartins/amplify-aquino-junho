import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Fast Nature</h1>
      <nav>
        <ul>
          <li><a href="#crepes">Crepes Crocantes</a></li>
          <li><a href="#shakes">Shakes de Açaí</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
