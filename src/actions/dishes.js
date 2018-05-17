import {getDishes} from '../services/dishes';
import {fetchCategories} from './categories';

export const FETCH_DISHES = 'FETCH_DISHES';
export const RECEIVE_DISHES = 'RECEIVE_DISHES';

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
  dispatch({type: FETCH_DISHES});
  getDishes(categoryId)
    .then(dishes => dispatch({type: RECEIVE_DISHES, dishes, categoryId}))
    .catch(error => dispatch({type: RECEIVE_DISHES, dishes: [], categoryId}));
}