import React, {Component} from 'react';
import './Input.scss';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

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
                    className={`input ${this.props.error && 'error' || ''}`}
                    placeholder={this.props.label}
                />
                {this.props.error && <ErrorMessage>{this.props.error.msg}</ErrorMessage>}
            </div>
        );
    }
}
