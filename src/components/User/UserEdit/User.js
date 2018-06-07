import React, {Component} from 'react';
import Input from '../../Input/Input';
import AppLoader from '../../AppLoader/AppLoader';

export default class UserEdit extends Component {
    render() {
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
}
