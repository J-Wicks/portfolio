import React from 'react';
import Reveal from 'react-reveal'; // this package
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

const Project = props => {
  const {title, imgSrc, abbreviation, description } = props.project
  return (
    <div className="fullProject">
      <div className="projectHeader" >
        <div className="abbrevCircle">
          <p>{abbreviation}</p>
        </div>
        <h2> {title} </h2>
        <button
          onClick={props.clickHandler}
          value={abbreviation}
          className="toggleArrow glyphicon glyphicon-triangle-right"
        />
      </div>
      <div className="projectDescription">
        <p>
          {description}
        </p>
      </div>
      <img alt="project gif"src={imgSrc} />
    </div>
    )
}

export default Project;