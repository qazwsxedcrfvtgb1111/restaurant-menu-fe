import {combineReducers} from 'redux';
import {categories} from './categories';
import {dishes} from './dishes';

export const rootReducer = combineReducers({
  categories,
  dishes
});