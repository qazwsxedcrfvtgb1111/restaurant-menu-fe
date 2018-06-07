import {UserService} from '../services/UserService';
import {getTokenFromState} from './heplpers';


export const FETCH_USERS = 'FETCH_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const EDIT_USER = 'EDIT_USER';
export const CANCEL_EDIT_USER = 'CANCEL_EDIT_USER';
export const ADD_USER = 'ADD_USER';
export const SAVING_USER = 'SAVING_USER';
export const UPDATED_USER = 'UPDATED_USER';
export const CREATED_USER = 'CREATED_USER';
export const SAVE_USER_FAILED = 'SAVE_USER_FAILED';
export const DELETING_USER = 'DELETING_USER';
export const DELETED_USER = 'DELETED_USER';
export const DELETE_USER_FAILED = 'DELETE_USER_FAILED';
export const SET_USER_VALUE = 'SET_USER_VALUE';

export function fetchUsers() {
    return (dispatch) => {
        dispatch({type: FETCH_USERS});
        new UserService(dispatch).get()
            .then(users => dispatch({type: RECEIVE_USERS, users}))
            .catch(error => dispatch({type: RECEIVE_USERS, users: []}));
    };
}

export function editUser(item) {
    return {type: EDIT_USER, item};
}

export function cancelEditUser(item) {
    return {type: CANCEL_EDIT_USER, item};
}

export function addUser() {
    return {type: ADD_USER};
}

export function deleteUser(item) {
    return (dispatch, getState) => {
        dispatch({type: DELETING_USER, item});
        if (item.id) {
            return new UserService(dispatch, getTokenFromState(getState())).delete(item.id)
                .then(() => dispatch({type: DELETED_USER, item}))
                .catch(() => dispatch({type: DELETE_USER_FAILED, item}));
        }
    };
}

export function saveUser(item) {
    return (dispatch, getState) => {
        const saveId = Date.now();
        dispatch({type: SAVING_USER, item, saveId});
        if (item.id) {
            return new UserService(dispatch, getTokenFromState(getState())).update(item)
                .then(() => {
                    return dispatch({type: UPDATED_USER, item});
                })
                .catch(errors => {
                    return dispatch({type: SAVE_USER_FAILED, errors, saveId});
                });
        } else {
            return new UserService(dispatch, getTokenFromState(getState())).create(item)
                .then(({id}) => dispatch({type: CREATED_USER, id, saveId}))
                .catch(errors => dispatch({type: SAVE_USER_FAILED, errors, saveId}));
        }
    };
}

export function setUserValue(field, value, item) {
    return {type: SET_USER_VALUE, field, value, item};
}
