import {getCategories} from '../services/categories';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export function fetchCategories() {
    return (dispatch, getState) => {
        const {categories} = getState();
        if (!categories.items.length) {
            dispatch({type: FETCH_CATEGORIES});
            return getCategories()
                .then(categories => dispatch({type: RECEIVE_CATEGORIES, categories}))
                .catch(error => dispatch({type: RECEIVE_CATEGORIES, categories: []}));
        }
    };
}
