import React, { Component } from 'react';
import Reveal from 'react-reveal'; // this package
import Iframe from 'react-iframe';

const Videos = () => {
  return (
    <div id="videos" className="container-fluid container-default">
    <h1 className='sectionHead'> Videos </h1>
      <Reveal effect="animated flipInX">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 iFrame">
            <Iframe url="https://www.youtube.com/embed/sNWzvsHGZr8"
              width="350px"
              height="225px"
              display="initial"
              position="relative"
              allowFullScreen
            />
        </div>
      </Reveal>
      <Reveal effect="animated flipInX">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 iFrame">
            <Iframe  url="https://www.youtube.com/embed/Hhie8-Py3NM"
              width="350px"
              height="225px"
              display="initial"
              position="relative"
              allowFullScreen
            />
        </div>
      </Reveal>
    </div>
  );
}

export default Videos;
