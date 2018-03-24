import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/" href="/">Timer</Link></li>
        <li><Link to="/statistics" href="/statistics">Statistics</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
