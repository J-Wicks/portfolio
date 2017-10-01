import React from 'react';
import 'animate.css/animate.css'; // CSS animation effects library (you can use something else if you wish)
import Header from './Header';
import SocialMedia from './SocialMedia';
import Projects from './Projects.jsx';
import Videos from './Videos';
import Bio from './Bio';
import './App.css';

require('bootstrap');


const App = () => {
  return (
    <div className="App">
      <Header />
      <div id="body">
        <Bio />
        <SocialMedia />
        <Videos />
        <Projects />
      </div>
    </div>
  );
}

export default App;
