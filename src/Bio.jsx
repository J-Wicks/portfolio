import React from 'react';
import Reveal from 'react-reveal'; // this package
import circleRender from './circleRender.png';
import bioText from './biotext.js'


const Bio = () => {
  return (
    <div id="bio" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <h1 className="sectionHead"> Bio </h1>
      <Reveal effect="animated bounceIn">
        <div className="bioBlock">
          <img className="biopic" src={circleRender} alt="pic of my face"/>
          <p>
            <b> Currently looking for Front-End Developer Opportunities! </b> <br /><br />
            My name is Jeremy, and I'm a teaching fellow at Fullstack Academy of Code. I'm an avid user of react, and I love creating web apps like this one! I learned React at Fullstack Academy of code, and after completing the curriculum I was asked to come back and provide mentorship to the incoming junior class. Of course, I jumped at the opportunity. I really love working with students and seeing their enthusiasm for learning these new technologies. 
            <br />
            <br />
            Prior to joining the Fullstack program I worked as a lead analyst at a premier health and benefits outsourcing firm. While I enjoyed this work, especially the MS SQL aspects, my responsibilities often fell under the diagnostics and project management umbrella. Having grown up working on cars, naturally I was curious as to what was going on 'under the hood' of our software. This is what drove me to coding. I hope to find a job that combines the analytical skills and software I gained during my time as an analyst with the technologies that I have immersed myself in during my time at Fullstack.
          </p>
        </div>
      </Reveal>
    </div>
  );
};

export default Bio;
