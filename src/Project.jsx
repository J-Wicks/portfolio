import React from 'react';

const Project = props => {
  const {title, imgSrc, abbreviation, description } = props.project
  return (
    <div className="fullProject">
      <div className="projectHeader" >
        <div className="abbrevCircle">
          <p>{abbreviation}</p>
        </div>
        <h2> {title} </h2>
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
