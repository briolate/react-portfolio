import React from 'react';
import './App.css';

import Cover from './components/Cover';
import Skills from './components/Skills';
import Work from './components/Work';
import Menu from './components/Menu';

const App = props => {
  return (
    <div className="App">
      <Menu />
      <Cover />
      <Skills />
      <Work />
    </div>
  );
};

export default App;
