import React from 'react';

const MiniProject = (props) => {
  return (  
    <div className="miniProject">
      <div className="abbrevCircle">
        <p>{props.name}</p>
      </div>
      <button
        onClick={props.clickHandler}
        value={props.name}
        className="toggleArrow glyphicon glyphicon-triangle-right"
      />
    </div>
  )
}

export default MiniProject