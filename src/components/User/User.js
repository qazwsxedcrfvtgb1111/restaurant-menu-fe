import React, {Component} from 'react';
import './User.scss';
import UserEdit from './UserEdit/User';
import UserView from './UserView/UserView';

export default class User extends Component {
    render() {
        if (this.props.editing) {
            return <UserEdit {...this.props} />;
        }

        return <UserView {...this.props} />;
    }
}
