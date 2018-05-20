import React, {Component} from 'react';
import './Input.scss';

export default class Input extends Component {
    onChange(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <div className='input-container'>
                {this.props.label && !this.props.hideLabel && (
                    <label className='input-label'>{this.props.label}</label>
                )}
                <input
                    type={this.props.type}
                    value={this.props.value}
                    onChange={event => this.onChange(event)}
                    className='input'
                    placeholder={this.props.label}
                />
            </div>
        );
    }
}
