import React, { Component } from 'react';
import { Sticky } from 'react-sticky';

export default class Links extends Component {
  render() {
    return(
      <ul id="links">
        <li> <a href="#">Social Media</a></li>
        <li> <a href="#">Projects</a> </li>
        <li> <a href="#">Videos</a> </li>
      </ul>
      )
  }
}
