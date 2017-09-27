import React from 'react';
import 'animate.css/animate.css'; // CSS animation effects library (you can use something else if you wish)
import Header from './Header';
import SocialMedia from './SocialMedia';
import Projects from './Projects';
import Videos from './Videos';
import './App.css';

require('bootstrap');


const App = () => {
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

export default App;
