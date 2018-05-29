import {combineReducers} from 'redux';
import {categories} from './categories';
import {dishes} from './dishes';
import {auth} from './auth';
import {login} from './login';
import {users} from './users';

export const rootReducer = combineReducers({
    categories,
    dishes,
    auth,
    login,
    users,
});
