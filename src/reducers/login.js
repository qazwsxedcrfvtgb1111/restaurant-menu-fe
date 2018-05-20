import {FAILED_AUTH, FETCH_TOKEN, FORGET_TOKEN, RECEIVE_TOKEN, SET_PASSWORD, SET_USERNAME} from '../actions/auth';

export function login(
    state = {
        fetching: false,
        username: '',
        password: '',
        error: false
    },
    action
) {
    switch (action.type) {
        case SET_USERNAME:
            return {...state, username: action.value};
        case SET_PASSWORD:
            return {...state, password: action.value};
        case FETCH_TOKEN:
            return {...state, fetching: true};
        case RECEIVE_TOKEN:
            return {...state, fetching: false, error: false, password: ''};
        case FAILED_AUTH:
            return {...state, fetching: false, password: '', error: true};
        case FORGET_TOKEN:
            return {...state, token: ''};
        default:
            return state;
    }
}
