import React, { Component } from 'react';
import Reveal from 'react-reveal'; // this package

import Project from './Project';
import MiniProject from './MiniProject';
import allProjects from './projectsArray';

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
        <li className="projectList">
          {
            allProjects.map((project) => {
              if (this.state.display.indexOf(project.abbreviation) === -1) {
                return (
                  <MiniProject clickHandler={this.toggleProject} name={project.abbreviation} />
                );
              }
              return (
                <Project
                  clickHandler={this.toggleProject}
                  abbreviation={project.abbreviation}
                  description={project.description}
                  imageSource={project.imageSource}
                />
              );
            })
          }
        </li>
      </section>
    );
  }
}

export default SocialMedia;
