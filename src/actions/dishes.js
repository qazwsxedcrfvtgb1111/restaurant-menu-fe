import {fetchCategories} from './categories';
import {DishService} from '../services/DishService';

export const FETCH_DISHES = 'FETCH_DISHES';
export const RECEIVE_DISHES = 'RECEIVE_DISHES';
export const EDIT_DISH = 'EDIT_DISH';
export const CANCEL_EDIT_DISH = 'CANCEL_EDIT_DISH';
export const ADD_DISH = 'ADD_DISH';
export const SAVING_DISH = 'SAVING_DISH';
export const UPDATED_DISH = 'UPDATED_DISH';
export const CREATED_DISH = 'CREATED_DISH';
export const SAVE_DISH_FAILED = 'SAVE_DISH_FAILED';
export const DELETING_DISH = 'DELETING_DISH';
export const DELETED_DISH = 'DELETED_DISH';
export const DELETE_DISH_FAILED = 'DELETE_DISH_FAILED';
export const SET_DISH_VALUE = 'SET_DISH_VALUE';
export const MANIPULATE_DISH_IMAGE = 'MANIPULATE_DISH_IMAGE';

export function fetchDishes(categoryId) {
    return (dispatch, getState) => {
        const {categories} = getState();
        if (!categories.items.length) {
            dispatch(fetchCategories())
                .then(() => getDishesActions(dispatch, categoryId));
        } else {
            getDishesActions(dispatch, categoryId);
        }
    };
}

function getDishesActions(dispatch, categoryId) {
    dispatch({type: FETCH_DISHES, categoryId});
    new DishService(dispatch).get(categoryId)
        .then(dishes => dispatch({type: RECEIVE_DISHES, dishes, categoryId}))
        .catch(error => dispatch({type: RECEIVE_DISHES, dishes: [], categoryId}));
}


export function editDish(item) {
    return {type: EDIT_DISH, item};
}

export function cancelEditDish(item) {
    return {type: CANCEL_EDIT_DISH, item};
}

export function addDish() {
    return {type: ADD_DISH};
}

export function deleteDish(item) {
    return (dispatch, getState) => {
        dispatch({type: DELETING_DISH, item});
        if (item.id) {
            return new DishService(dispatch, getState()).delete(item.id)
                .then(() => dispatch({type: DELETED_DISH, item}))
                .catch(() => dispatch({type: DELETE_DISH_FAILED, item}));
        }
    }
}

export function saveDish(item) {
    return (dispatch, getState) => {
        const saveId = Date.now();
        dispatch({type: SAVING_DISH, item, saveId});
        if (item.id) {
            return new DishService(dispatch, getState()).update(item)
                .then(() => {
                    return dispatch({type: UPDATED_DISH, item});
                })
                .catch(errors => {
                    return dispatch({type: SAVE_DISH_FAILED, errors, saveId});
                });
        } else {
            return new DishService(dispatch, getState()).create(item)
                .then(({id}) => dispatch({type: CREATED_DISH, id, saveId}))
                .catch(errors => dispatch({type: SAVE_DISH_FAILED, errors, saveId}));
        }
    }
}

export function setDishValue(field, value, item) {
    return {type: SET_DISH_VALUE, field, value, item};
}