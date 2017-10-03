import React, { Component } from 'react';
import Reveal from 'react-reveal'; // this package
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

import Project from './Project';
import MiniProject from './MiniProject';
import allProjects from './projects';

const defaultProps = {
  customClasses: true,

  appear: true,
  enter: true,
  leave: true,

  appearTimeout: 500,
  enterTimeout: 500,
  leaveTimeout: 500,

  appearName: 'bounce',
  appearActiveName: 'bounce',
  enterName: 'bounce',
  enterActiveName: 'bounce',
  leaveName: 'bounceOut',
  leaveActiveName: 'bounceOut'
};

class SocialMedia extends Component {
  constructor() {
    super();
    this.state = {
      display: [],
    };
    this.toggleProject = this.toggleProject.bind(this)
  }

  toggleProject(event) {
    let newDisplay = this.state.display;
    if (this.state.display.indexOf(event.target.value) > -1) {
      newDisplay = this.state.display.filter(project => project !== event.target.value);
    } else newDisplay.push(event.target.value);
    this.setState({
      display: newDisplay,
    });
  }
  render() {
    return (
      <section id="projects">
        <h1 className="sectionHead"> Projects </h1>
        {
          allProjects.map((project) => {
            return (
              <Project
                clickHandler={this.toggleProject}
                project={project}
              />
            );
          })
        }
      </section>
    );
  }
}

export default SocialMedia;
