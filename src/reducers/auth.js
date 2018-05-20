import {FORGET_TOKEN, RECEIVE_TOKEN} from '../actions/auth';

export function auth(
    state = {
        token: '',
    },
    action
) {
    switch (action.type) {
        case RECEIVE_TOKEN:
            return {token: action.token};
        case FORGET_TOKEN:
            return {...state, token: ''};
        default:
            return state;
    }
}
