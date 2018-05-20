import {getToken} from '../services/auth';
import {push} from 'react-router-redux';

export const SET_USERNAME = 'SET_USERNAME';
export const SET_PASSWORD = 'SET_PASSWORD';
export const FAILED_AUTH = 'FAILED_AUTH';
export const FETCH_TOKEN = 'FETCH_TOKEN';
export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';
export const FORGET_TOKEN = 'FORGET_TOKEN';

export function setUsername(value) {
    return {type: SET_USERNAME, value};
}

export function setPassword(value) {
    return {type: SET_PASSWORD, value};
}

export function fetchToken() {
    return (dispatch, getState) => {
        const {username, password} = getState().login;
        dispatch({type: FETCH_TOKEN});
        getToken({username, password})
            .then(({token}) => {
                dispatch({type: RECEIVE_TOKEN, token});
                dispatch(push('/'));
            })
            .catch(() => dispatch({type: FAILED_AUTH}));
    };
}

export function forgetToken() {
    return {type: FORGET_TOKEN};
}