import React, {Component} from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className='Footer'>
        <span className='title'>Restaurant</span>
        <div className='info'>
          <span>About</span>
          <span>Contact us</span>
        </div>
      </footer>
    );
  }
}
