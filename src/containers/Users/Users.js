import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Users.scss';
import BackButton from '../../components/BackButton/BackButton';
import ControlIcons from '../../components/ControlIcons/ControlIcons';
import {addUser, cancelEditUser, deleteUser, editUser, fetchUsers, saveUser, setUserValue} from '../../actions/users';
import User from '../../components/User/User';
import {push} from 'react-router-redux';
import AddElement from '../../components/AddElement/AddElement';


class Users extends Component {
    componentDidMount() {
        if (!this.props.isAuthorized) {
            this.props.dispatch(push('/'));
        }
        this.props.dispatch(fetchUsers());
    }

    render() {
        return (
            <div className='Users'>
                <BackButton/>
                {this.props.users.items.map((user, index) =>
                    <div className='control-container' key={index}>
                        <User {...user}
                              errors={user.errors || {}}
                              onEdit={(prop, value) => this.props.dispatch(setUserValue(prop, value, user))}
                        />
                        {this.props.isAuthorized &&
                        <ControlIcons editing={user.editing} disabled={user.fetching}
                                      onEditClick={() => this.props.dispatch(editUser(user))}
                                      onSaveClick={() => this.props.dispatch(saveUser(user))}
                                      onCancelClick={() => this.props.dispatch(cancelEditUser(user))}
                                      onDeleteClick={() => this.props.dispatch(deleteUser(user))}/>}
                    </div>)}
                <AddElement onAdd={() => this.props.dispatch(addUser())}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {users} = state;
    return {
        users,
        isAuthorized: !!state.auth.token,
};
}

export default connect(mapStateToProps)(Users);
