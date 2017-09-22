import React, { Component } from 'react';
import Reveal from 'react-reveal'; // this package

class SocialMedia extends Component {
  render() {
    return (
        <section id="projects">
          <li className='projectList'>
            <h1 className='sectionHead'> Projects </h1>
            <hr width="1" size="500" />
            <div className="abbrevCircle">
              <p>Ch</p>
              </div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Hhie8-Py3NM" frameborder="0" allowfullscreen></iframe>
          </li>
        </section>
    );
  }
}

export default SocialMedia;
