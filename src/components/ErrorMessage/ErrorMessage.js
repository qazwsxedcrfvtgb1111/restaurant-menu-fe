import React, {Component} from 'react';
import './ErrorMessage.scss';

export default class ErrorMessage extends Component {
    render() {
        return (
            <div className='ErrorMessage'>
                {this.props.children}
            </div>
        );
    }
}
