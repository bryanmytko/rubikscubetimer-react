import React from 'react';
import './App.scss';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => (
  <div className="mainContainer">
    <Header />
    <Main />
  </div>
);

export default App;
