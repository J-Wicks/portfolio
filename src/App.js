import React, { Component } from 'react';
import 'animate.css/animate.css'; // CSS animation effects library (you can use something else if you wish)
import Header from './Header.js';
import SocialMedia from './SocialMedia.js';
import Projects from './Projects.js';
import Videos from './Videos';
import Links from './Links.js';
import { Sticky, StickyContainer } from 'react-sticky';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div id="body">
          <SocialMedia />
          <Videos />
          <Projects />
        </div>
      </div>
    );
  }
}

export default App;
