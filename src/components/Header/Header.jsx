import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => (
  <header>
    <section className="logo">
      <div className="logo__container">
        <h1>Rubik&#8217;s Cube Timer</h1>
      </div>
    </section>
    <nav>
      <ul>
        <li><Link to="/" href="/">Timer</Link></li>
        <li><Link to="/statistics" href="/statistics">Statistics</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
