import React from 'react';

const MiniProject = (props) => (  
  <div>
    <div className="abbrevCircle">
      <p>{props.name}</p>
      <span className="projectDescription glyphicon glyphicon-triangle-right" />
    </div>
  </div>
)

export default MiniProject