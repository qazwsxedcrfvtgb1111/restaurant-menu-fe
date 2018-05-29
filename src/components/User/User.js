import React, {Component} from 'react';
import './User.scss';
import Input from '../Input/Input';
import AppLoader from '../AppLoader/AppLoader';

export default class User extends Component {
    render() {
        if (this.props.editing) {
            return (
                <div className='User shadowed animated fadeIn'>
                    <AppLoader loading={this.props.fetching}/>
                    <div className='text-container'>
                        <div className='name'>
                            <Input value={this.props.name} hideLabel={true} label='Name'
                                   onChange={value => this.props.onEdit('name', value)}
                                   error={this.props.errors.name}
                            />
                        </div>
                        <div className='password'>
                            <Input value={this.props.password} hideLabel={true} label='Password' type='password'
                                   error={this.props.errors.password}
                                   onChange={value => this.props.onEdit('password', value)}/>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className='User shadowed'>
                <AppLoader loading={this.props.fetching}/>
                <div className='text-container'>
                    <div className='name'>
                        {this.props.name}
                    </div>
                </div>
            </div>
        );
    }
}
