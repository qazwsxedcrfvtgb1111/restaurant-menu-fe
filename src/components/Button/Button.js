import React, {Component} from 'react';
import './Button.scss';

export default class Button extends Component {
    render() {
        return (
            <button className='Button' onClick={() => this.props.onClick()} style={{color: this.props.color}}>
                {this.props.children}
            </button>
        );
    }
}
