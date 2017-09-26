import React from 'react';

const Project = (props) => (  
  <div>
    <div className="projectHeader" >
      <div className="abbrevCircle">
        <p>{props.abbreviation}</p>
      </div>
      <h2> Project Name </h2>
    </div>
    <div className="projectDescription">
      <p>
      {props.description}
      </p>
    </div>
    <img src={props.imageSource} />
  </div>
)

export default Project