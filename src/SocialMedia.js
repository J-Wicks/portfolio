import React, { Component } from 'react';
import Reveal from 'react-reveal'; // this package

class SocialMedia extends Component {
  render() {
    return (
      <div id="smLinks">
        <h1 className='sectionHead'> Social Media </h1>
        <Reveal effect="animated bounceIn">
          <a href='https://www.linkedin.com/in/jeremy-wicks/'> 
            <img className='icon' src='http://psiint.com/wp-content/uploads/2017/03/linkedin-logo-copy.png' /> LinkedIn
          </a>
          <a href='https://stackoverflow.com/users/8298787/jeremy-wicks'>
            <img className='icon' src='https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-icon.svg?v=6e4af45f4d66' />StackOverflow
          </a>
          <br />
          <a href='https://github.com/J-Wicks'>
            <img className='icon' src='https://image.flaticon.com/icons/png/512/25/25231.png' /> GitHub 
          </a>
          <a href='https://twitter.com/JCole_W'>
            <img className='icon' src='https://www.sketchappsources.com/resources/source-image/twitterlogo_1x.png' /> Twitter 
          </a>
        </Reveal>
      </div>
    );
  }
}

export default SocialMedia;
