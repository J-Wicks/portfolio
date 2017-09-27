import React, { Component } from 'react';
import Reveal from 'react-reveal'; // this package

const Videos = () => {
  return (
    <div id="videos" className="container-fluid container-default">
    <h1 className='sectionHead'> Videos </h1>
      <Reveal effect="animated flipInX">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <iframe src="https://www.youtube.com/embed/Hhie8-Py3NM" frameborder="0" allowfullscreen></iframe>
        </div>
      </Reveal>
      <Reveal effect="animated flipInX">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <iframe  src="https://www.youtube.com/embed/Hhie8-Py3NM" frameborder="0" allowfullscreen></iframe>
        </div>
      </Reveal>
      <Reveal effect="animated flipInX">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <iframe src="https://www.youtube.com/embed/Hhie8-Py3NM" frameborder="0" allowfullscreen></iframe>
        </div>
      </Reveal>
      <Reveal effect="animated flipInX">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <iframe src="https://www.youtube.com/embed/Hhie8-Py3NM" frameborder="0" allowfullscreen></iframe>
        </div>
      </Reveal>
    </div>
  );
}

export default Videos;
