import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Login.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {fetchToken, setPassword, setUsername} from '../../actions/auth';
import {push} from 'react-router-redux';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

class Login extends Component {

    componentDidMount() {
        if (this.props.token) {
            this.props.dispatch(push('/'));
        }
    }

    render() {
        return (
            <div className='Login'>
                <Input
                    label='Username'
                    value={this.props.username}
                    onChange={value => this.props.dispatch(setUsername(value))}
                />
                <Input
                    label='Password'
                    value={this.props.password}
                    type='password'
                    onChange={value => this.props.dispatch(setPassword(value))}
                />
                {this.props.error && (<ErrorMessage>Invalid credentials</ErrorMessage>)}
                <div className='btn-container'>
                    <Button onClick={() => this.props.dispatch(fetchToken())}>Log in</Button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {login} = state;
    return {
        ...login,
        token: state.auth.token
    };
}

export default connect(mapStateToProps)(Login);
