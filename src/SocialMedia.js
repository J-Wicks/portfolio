import React, { Component } from 'react';
import Reveal from 'react-reveal'; // this package

const socials=[
  {siteName: 'LinkedIn', link: 'https://www.linkedin.com/in/jeremy-wicks/', icon: 'http://psiint.com/wp-content/uploads/2017/03/linkedin-logo-copy.png'},
  {siteName: 'Stack Overflow', link: 'https://stackoverflow.com/users/8298787/jeremy-wicks', icon: 'https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-icon.svg?v=6e4af45f4d66'},
  {siteName: 'GitHub', link: 'https://github.com/J-Wicks', icon: 'https://image.flaticon.com/icons/png/512/25/25231.png'},
  {siteName: 'Twitter', link: 'https://twitter.com/JCole_W', icon: 'https://www.sketchappsources.com/resources/source-image/twitterlogo_1x.png'}
]

class SocialMedia extends Component {
  render() {
    return (
      <div id="smLinks" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h1 className='sectionHead'> Social Media </h1>
        <Reveal effect="animated bounceIn">
          {
            socials.map(site => (
              <div className='socialPanel col-lg-5 col-md-5 col-sm-7 col-xs-7'>
                <a href={site.link}> 
                  <img className='icon' src={site.icon}/> {site.siteName}
                </a>
              </div>
              ))
          }
        </Reveal>
      </div>
    );
  }
}

export default SocialMedia;
