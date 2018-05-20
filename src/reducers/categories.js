import {
    ADD_CATEGORY,
    CANCEL_EDIT_CATEGORY,
    CREATED_CATEGORY,
    DELETE_CATEGORY_FAILED,
    DELETED_CATEGORY,
    DELETING_CATEGORY,
    EDIT_CATEGORY,
    FETCH_CATEGORIES,
    RECEIVE_CATEGORIES,
    SAVE_CATEGORY_FAILED,
    SAVING_CATEGORY,
    SET_CATEGORY_VALUE,
    UPDATED_CATEGORY
} from '../actions/categories';
import {removeByEquality, removeById, replaceByEquality, replaceById} from './helpers';

export function categories(state = {
    fetching: false,
    items: [],
    oldItems: [],
    errors: []
}, action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {
                fetching: true,
                items: [],
                oldItems: []
            };
        case RECEIVE_CATEGORIES:
            return {
                fetching: false,
                items: action.categories,
                oldItems: action.categories.map(item => ({...item}))
            };
        case EDIT_CATEGORY:
            return {
                ...state,
                items: replaceByEquality(state.items, action.item, {editing: true})
            };
        case CANCEL_EDIT_CATEGORY:
            if (action.item.id) {
                const oldItem = state.oldItems.find(item => item.id === action.item.id);
                return {
                    ...state,
                    items: replaceById(state.items, action.item, {...oldItem, editing: false})
                }
            }
            return {
                ...state,
                items: removeByEquality(state.items, action.item)
            };
        case ADD_CATEGORY:
            return {
                ...state,
                items: [...state.items, {
                    title: '',
                    description: '',
                    img: 'http://cdn-img.health.com/sites/default/files/styles/large_16_9/public/styles/main/public/gettyimages-515202999.jpg?itok=MD4bUlS5',
                    editing: true
                }]
            };
        case SAVING_CATEGORY:
            return {
                ...state,
                items: replaceByEquality(state.items, action.item, {
                    editing: false,
                    saveId: action.saveId,
                    fetching: true,
                })
            };
        case UPDATED_CATEGORY:
            return {
                ...state,
                oldItems: replaceById(state.oldItems, action.item, {...action.item}),
                items: replaceById(state.items, action.item, {fetching: false})
            };
        case CREATED_CATEGORY:
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
        case DELETE_CATEGORY_FAILED:
            return {
                ...state,
                items: replaceById(state.items, action.item, {fetching: false}),
                errors: action.errors
            };
        case SAVE_CATEGORY_FAILED:
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
        case DELETING_CATEGORY:
            if (!action.item.id) {
                return {...state, items: removeByEquality(state.items, action.item)};
            }
            return {
                ...state,
                items: replaceById(state.items, action.item, {fetching: true})
            };
        case DELETED_CATEGORY:
            return {...state, items: removeById(state.items, action.item)};
        case SET_CATEGORY_VALUE:
            return {
                ...state,
                items: replaceByEquality(state.items, action.item, {[action.field]: action.value})
            };
        default:
            return state;
    }
}
