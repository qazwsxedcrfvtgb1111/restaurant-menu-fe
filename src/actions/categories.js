import {CategoryService} from '../services/CategoryService';
import {getTokenFromState} from './heplpers';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const CANCEL_EDIT_CATEGORY = 'CANCEL_EDIT_CATEGORY';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const SAVING_CATEGORY = 'SAVING_CATEGORY';
export const UPDATED_CATEGORY = 'UPDATED_CATEGORY';
export const CREATED_CATEGORY = 'CREATED_CATEGORY';
export const SAVE_CATEGORY_FAILED = 'SAVE_CATEGORY_FAILED';
export const DELETING_CATEGORY = 'DELETING_CATEGORY';
export const DELETED_CATEGORY = 'DELETED_CATEGORY';
export const DELETE_CATEGORY_FAILED = 'DELETE_CATEGORY_FAILED';
export const SET_CATEGORY_VALUE = 'SET_CATEGORY_VALUE';
export const MANIPULATE_CATEGORY_IMAGE = 'MANIPULATE_CATEGORY_IMAGE';


export function fetchCategories() {
    return (dispatch, getState) => {
        const {categories} = getState();
        if (!categories.items.length) {
            dispatch({type: FETCH_CATEGORIES});
            return new CategoryService(dispatch).get()
                .then(categories => dispatch({type: RECEIVE_CATEGORIES, categories}))
                .catch(error => dispatch({type: RECEIVE_CATEGORIES, categories: []}));
        }
    };
}

export function editCategory(item) {
    return {type: EDIT_CATEGORY, item};
}

export function cancelEditCategory(item) {
    return {type: CANCEL_EDIT_CATEGORY, item};
}

export function addCategory() {
    return {type: ADD_CATEGORY};
}

export function deleteCategory(item) {
    return (dispatch, getState) => {
        dispatch({type: DELETING_CATEGORY, item});
        if (item.id) {
            return new CategoryService(dispatch, getTokenFromState(getState())).delete(item.id)
                .then(() => dispatch({type: DELETED_CATEGORY, item}))
                .catch(() => dispatch({type: DELETE_CATEGORY_FAILED, item}));
        }
    }
}

export function saveCategory(item) {
    return (dispatch, getState) => {
        const saveId = Date.now();
        dispatch({type: SAVING_CATEGORY, item, saveId});
        if (item.id) {
            return new CategoryService(dispatch, getTokenFromState(getState())).update(item)
                .then(() => {
                    return dispatch({type: UPDATED_CATEGORY, item});
                })
                .catch(errors => {
                    console.log(errors);
                    return dispatch({type: SAVE_CATEGORY_FAILED, errors, saveId});
                });
        } else {
            return new CategoryService(dispatch, getTokenFromState(getState())).create(item)
                .then(({id}) => dispatch({type: CREATED_CATEGORY, id, saveId}))
                .catch(errors => dispatch({type: SAVE_CATEGORY_FAILED, errors, saveId}));
        }
    }
}

export function setCategoryValue(field, value, item) {
    return {type: SET_CATEGORY_VALUE, field, value, item};
}
