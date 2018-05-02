import React, {Component} from 'react';
import './BackButton.css';
import {Link} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft';

export default class BackButton extends Component {
  render() {
    return (
      <Link to='/' className='BackButton'><FontAwesomeIcon icon={faArrowLeft}/> Back</Link>
    );
  }
}
