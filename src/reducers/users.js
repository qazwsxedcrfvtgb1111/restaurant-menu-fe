import {removeByEquality, removeById, replaceByEquality, replaceById} from './helpers';
import {
    ADD_USER,
    CANCEL_EDIT_USER,
    CREATED_USER,
    DELETE_USER_FAILED,
    DELETED_USER,
    DELETING_USER,
    EDIT_USER,
    FETCH_USERS,
    RECEIVE_USERS,
    SAVE_USER_FAILED,
    SAVING_USER,
    SET_USER_VALUE,
    UPDATED_USER
} from '../actions/users';

export function users(state = {
    fetching: false,
    items: [],
    oldItems: [],
    errors: []
}, action) {
    switch (action.type) {
        case FETCH_USERS:
            return {
                fetching: true,
                items: [],
                oldItems: []
            };
        case RECEIVE_USERS:
            return {
                fetching: false,
                items: action.users,
                oldItems: action.users.map(item => ({...item}))
            };
        case EDIT_USER:
            return {
                ...state,
                items: replaceByEquality(state.items, action.item, {editing: true})
            };
        case CANCEL_EDIT_USER:
            if (action.item.id) {
                const oldItem = state.oldItems.find(item => item.id === action.item.id);
                return {
                    ...state,
                    items: replaceById(state.items, action.item, {...oldItem, editing: false})
                };
            }
            return {
                ...state,
                items: removeByEquality(state.items, action.item)
            };
        case ADD_USER:
            return {
                ...state,
                items: [...state.items, {
                    name: '',
                    password: '',
                    editing: true
                }]
            };
        case SAVING_USER:
            return {
                ...state,
                items: replaceByEquality(state.items, action.item, {
                    editing: false,
                    saveId: action.saveId,
                    fetching: true,
                })
            };
        case UPDATED_USER:
            return {
                ...state,
                oldItems: replaceById(state.oldItems, action.item, {...action.item}),
                items: replaceById(state.items, action.item, {fetching: false})
            };
        case CREATED_USER:
            let createdItem = {};
            const items = state.items.map(item => {
                if (item.saveId === action.saveId) {
                    const {saveId, ...rest} = item;
                    createdItem = {...rest, id: action.id, fetching: false};
                    return createdItem;
                }
                return item;
            });
            return {
                ...state,
                items,
                oldItems: [...state.oldItems, {...createdItem}]
            };
        case DELETE_USER_FAILED:
            return {
                ...state,
                items: replaceById(state.items, action.item, {fetching: false}),
                errors: action.errors
            };
        case SAVE_USER_FAILED:
            return {
                ...state,
                items: state.items.map(item => item.saveId === action.saveId ? {
                    ...item,
                    errors: action.errors,
                    editing: true,
                    saveId: null,
                    fetching: false,
                } : item)
            };
        case DELETING_USER:
            if (!action.item.id) {
                return {...state, items: removeByEquality(state.items, action.item)};
            }
            return {
                ...state,
                items: replaceById(state.items, action.item, {fetching: true})
            };
        case DELETED_USER:
            return {...state, items: removeById(state.items, action.item)};
        case SET_USER_VALUE:
            return {
                ...state,
                items: replaceByEquality(state.items, action.item, {[action.field]: action.value})
            };
        default:
            return state;
    }
}
