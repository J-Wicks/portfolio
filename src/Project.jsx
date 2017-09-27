import React from 'react';

const Project = props => (
  <div>
    <div className="projectHeader" >
      <div className="abbrevCircle">
        <p>{props.abbreviation}</p>
      </div>
      <h2> Project Name </h2>
      <button
        onClick={props.clickHandler}
        value={props.abbreviation}
        className="toggleArrow glyphicon glyphicon-triangle-right"
      />
    </div>
    <div className="projectDescription">
      <p>
        {props.description}
      </p>
    </div>
    <img alt="project gif"src={props.imageSource} />
  </div>
)

export default Project;
