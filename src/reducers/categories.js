import {FETCH_CATEGORIES, RECEIVE_CATEGORIES} from '../actions/categories';

export function categories(state = {
    fetching: false,
    items: []
}, action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {
                fetching: true,
                items: []
            };
        case RECEIVE_CATEGORIES:
            return {
                fetching: false,
                items: action.categories
            };
        default:
            return state;
    }
}