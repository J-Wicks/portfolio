import React, { Component } from 'react';
import Project from './Project.js';
import MiniProject from './MiniProject.js';
import Reveal from 'react-reveal'; // this package
import allProjects from './projectsArray.js';

class SocialMedia extends Component {
  constructor(){
    super()
    this.state = {
      display: [],
    }
    this.toggleProject = this.toggleProject.bind(this)
  }

  toggleProject (event) {
    console.log(event.target.value)
    let newDisplay = this.state.display;
    if(this.state.display.indexOf(event.target.value) > -1) {
      newDisplay = this.state.display.filter(project => project !== event.target.value)
      console.log("New Display", newDisplay)
    } else newDisplay.push(event.target.value)
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
                  return <MiniProject clickHandler={this.toggleProject} name={project.abbreviation} />
                } else {
                  return (
                    <Project
                      clickHandler={this.toggleProject}
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
