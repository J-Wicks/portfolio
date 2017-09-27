import React from 'react';
import headerImg from './headerimg.jpg';

const App = () => (
  <div id="header">
    <img alt="Jeremy Wicks" id="headerimage" src={headerImg} />
    <ul id="links">
      <li> <a href="#smLinks">Social Media</a></li>
      <li> <a href="#projects">Projects</a> </li>
      <li> <a href="#videos">Videos</a> </li>
    </ul>
  </div>

);

export default App;
