import React, { Component } from 'react';

import Project from './Project';
import allProjects from './projects';

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
