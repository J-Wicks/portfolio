import React, { Component } from 'react';
import Project from './Project.js';
import MiniProject from './MiniProject.js';
import Reveal from 'react-reveal'; // this package
import allProjects from './projectsArray.js';

class SocialMedia extends Component {
  constructor(){
    super()
    this.state = {
      display: ['Ch'],
    }
  }

  toggleProject (event) {
    let newDisplay = [];
    if(this.state.display.indexOf(event.target.name) > -1) {
      newDisplay = this.state.display.filter(project => project !== event.target.name)
    } else newDisplay.push(event.target.name)
    this.setState({
      display: newDisplay,
    })
  }
  render() {
    return (
        <section id="projects">

          <h1 className='sectionHead'> Projects </h1>
          <li className='projectList'>
            {
              allProjects.map(project => {
                if(this.state.display.indexOf(project.abbreviation) === -1) {
                  return <MiniProject name={project.abbreviation} />
                } else {
                  return (
                    <Project
                      expand={this.state.display.indexOf('Ch') > -1}
                      abbreviation={project.abbreviation}
                      description={project.description}
                      imageSource={project.imageSource}
                    />
                  )
                }
              })
            }
          </li>
        </section>
    );
  }
}

export default SocialMedia;
