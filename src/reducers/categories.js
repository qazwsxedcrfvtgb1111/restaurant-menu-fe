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
                items: state.items.map(item => item === action.item ? {
                    ...item,
                    editing: true
                } : item),
            };
        case CANCEL_EDIT_CATEGORY:
            if (action.item.id) {
                const oldItem = state.oldItems.find(item => item.id === action.item.id);
                return {
                    ...state,
                    items: state.items.map(item => item.id === action.item.id ? {...oldItem, editing: false} : item),
                }
            }
            return {
                ...state,
                items: state.items.filter(item => item !== action.item)
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
                items: state.items.map(item => item === action.item ? {
                    ...item,
                    editing: false,
                    saveId: action.saveId,
                    fetching: true,
                } : item),
            };
        case UPDATED_CATEGORY:
            return {
                ...state,
                oldItems: state.oldItems.map(item => item.id === action.item.id ? {...action.item} : item),
                items: state.items.map(item => item.id === action.item.id ? {...item, fetching: false} : item)
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
                items: state.items.map(item => item.id === action.item.id ? {...item, fetching: false} : item),
                errors: action.errors
            };
        case SAVE_CATEGORY_FAILED:
            return {
                ...state,
                items: state.items.map(item => item.saveId === action.saveId ? {
                    ...item,
                    errors: action.errors,
                    editing: true,
                    saveId: null
                } : item)
            };
        case DELETING_CATEGORY:
            if (!action.item.id) {
                return {...state, items: state.items.filter(item => item !== action.item)};
            }
            return {
                ...state,
                items: state.items.map(item => item.id === action.item.id ? {...item, fetching: true} : item)
            };
        case DELETED_CATEGORY:
            return {...state, items: state.items.filter(item => item.id !== action.item.id)};
        case SET_CATEGORY_VALUE:
            return {
                ...state,
                items: state.items.map(item => item === action.item ? {...item, [action.field]: action.value} : item)
            };
        default:
            return state;
    }
}
