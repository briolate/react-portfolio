import React from 'react';
import './App.css';

import Menu from './components/Menu';
import Cover from './components/Cover';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Work1 from './components/work/Work1';
import Work2 from './components/work/Work2';
import Work3 from './components/work/Work3';
import Work4 from './components/work/Work4';

const App = props => {
  return (
    <div className="App">
      <Menu />
      <Cover />
      <Skills />
      <Work1 />
      <Work2 />
      <Work3 />
      <Work4 />
      <Contact />
    </div>
  );
};

export default App;
