import React from 'react';
import './App.css';

import Cover from './components/Cover';
import Skills from './components/Skills';
import Work from './components/Work';

const App = props => {
  return (
    <div className="App">
      <Cover />
      <Skills />
      <Work />
    </div>
  );
};

export default App;
