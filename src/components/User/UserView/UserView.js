import React, {Component} from 'react';
import AppLoader from '../../AppLoader/AppLoader';

export default class UserView extends Component {
    render() {
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
