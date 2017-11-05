import React from 'react';

const Project = props => {
  const {title, imgSrc, abbreviation, description, link } = props.project
  return (
    <div className="fullProject">
      <div className="projectHeader" >
        <div className="abbrevCircle">
          <p>{abbreviation}</p>
        </div>
        <a href={link}><h2> {title} </h2> </a>
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
