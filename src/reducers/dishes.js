import {FETCH_DISHES, RECEIVE_DISHES} from '../actions/dishes';

export function dishes(state = {
    items: {},
    fetching: false
}, action) {
    switch (action.type) {
        case FETCH_DISHES:
            return {...state, fetching: true};
        case RECEIVE_DISHES:
            return {
                fetching: false,
                items: {...state.items, [action.categoryId]: action.dishes}
            };
        default:
            return state;
    }
}