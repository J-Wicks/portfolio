import React, { Component } from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
import headerImg from './headerimg.jpg'

class App extends Component {
  render() {
    return (

      <div id="header">
        <img id="headerimage" src={headerImg} />
        <ul id="links">
          <li> <a href="#smLinks">Social Media</a></li>
          <li> <a href="#projects">Projects</a> </li>
          <li> <a href="#videos">Videos</a> </li>
        </ul>
      </div>
    )
  }
}

export default App;
