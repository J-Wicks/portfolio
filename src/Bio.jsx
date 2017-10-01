import React from 'react';
import Reveal from 'react-reveal'; // this package
import circleRender from './circleRender.png';
import bioText from './biotext.js'


const Bio = () => {
  return (
    <div id="smLinks" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <h1 className="sectionHead"> Bio </h1>
      <Reveal effect="animated bounceIn">
        <div className="bioBlock">
          <img className="biopic" src={circleRender} alt="pic of my face"/>
          <p> {bioText + ' ' + bioText}</p>
        </div>
      </Reveal>
    </div>
  );
};

export default Bio;
