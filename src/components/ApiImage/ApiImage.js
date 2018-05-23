import React, {Component} from 'react';
import './ApiImage.scss';
import {formUrl} from '../../services/helpers';

export default class ApiImage extends Component {
    render() {
        return (
            <img className='img' alt={this.props.alt} src={formUrl(this.props.src).toString()}/>
        );
    }
}
