import {
    ADD_DISH,
    CANCEL_EDIT_DISH,
    CREATED_DISH,
    DELETE_DISH_FAILED,
    DELETED_DISH,
    DELETING_DISH,
    EDIT_DISH,
    FETCH_DISHES, MANIPULATE_DISH_IMAGE,
    RECEIVE_DISHES,
    SAVE_DISH_FAILED,
    SAVING_DISH,
    SET_DISH_VALUE,
    UPDATED_DISH
} from '../actions/dishes';
import {replaceByEquality} from './helpers';
import {image} from './image';

export function dishes(state = {
    items: {},
    fetching: false
}, action) {
    switch (action.type) {
        case FETCH_DISHES:
            return {...state, fetching: true, categoryId: action.categoryId};
        case RECEIVE_DISHES:
            return {
                ...state,
                fetching: false,
                items: {...state.items, [action.categoryId]: action.dishes},
                oldItems: {...state.oldItems, [action.categoryId]: action.dishes.map(dish => ({...dish}))}
            };
        case EDIT_DISH:
            return {
                ...state,
                items: {
                    ...state.items,
                    [state.categoryId]: state.items[state.categoryId].map(item => item === action.item ? {
                        ...item,
                        editing: true
                    } : item),
                }
            };
        case CANCEL_EDIT_DISH:
            if (action.item.id) {
                const oldItem = state.oldItems.find(item => item.id === action.item.id);
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [state.categoryId]: state.items[state.categoryId].map(item => item.id === action.item.id ? {
                            ...oldItem,
                            editing: false
                        } : item)
                    },
                };
            }
            return {
                ...state,
                items: {
                    ...state.items,
                    [state.categoryId]: state.items[state.categoryId].filter(item => item !== action.item)
                }
            };
        case ADD_DISH:
            return {
                ...state,
                items: {
                    ...state.items, [state.categoryId]: [...state.items[state.categoryId], {
                        title: '',
                        description: '',
                        img: '',
                        price: '',
                        categoryId: state.categoryId,
                        editing: true,
                    }]
                }
            };
        case SAVING_DISH:
            return {
                ...state,
                items: {
                    ...state.items,
                    [state.categoryId]: state.items[state.categoryId].map(item => item === action.item ? {
                        ...item,
                        editing: false,
                        saveId: action.saveId,
                        fetching: true,
                    } : item)
                },
            };
        case UPDATED_DISH:
            return {
                ...state,
                oldItems: {
                    ...state.oldItems,
                    [state.categoryId]: state.oldItems[state.categoryId].map(item => item.id === action.item.id ? {...action.item} : item)
                },
                items: {
                    ...state.items,
                    [state.categoryId]: state.items[state.categoryId]
                        .map(item => item.id === action.item.id ? {
                            ...item,
                            fetching: false
                        } : item)
                }
            };
        case CREATED_DISH:
            let createdItem = {};
            const items = state.items[state.categoryId].map(item => {
                if (item.saveId === action.saveId) {
                    const {saveId, ...rest} = item;
                    createdItem = {...rest, id: action.id, fetching: false};
                    return createdItem;
                }
                return item;
            });
            return {
                ...state,
                items: {...state.items, [state.categoryId]: items},
                oldItems: {
                    ...state.oldItems,
                    [state.categoryId]: [...state.oldItems[state.categoryId], {...createdItem}]
                }
            };
        case DELETE_DISH_FAILED:
            return {
                ...state,
                items: {
                    ...state.items,
                    [state.categoryId]: state.items[state.categoryId].map(item => item.id === action.item.id ? {
                        ...item,
                        fetching: false
                    } : item)
                },
                errors: action.errors
            };
        case SAVE_DISH_FAILED:
            return {
                ...state,
                items: {
                    ...state.items,
                    [state.categoryId]: state.items[state.categoryId].map(item => item.saveId === action.saveId ? {
                        ...item,
                        errors: action.errors,
                        editing: true,
                        saveId: null,
                        fetching: false,
                    } : item)
                }
            };
        case DELETING_DISH:
            if (!action.item.id) {
                return {...state, items: state.items[state.categoryId].filter(item => item !== action.item)};
            }
            return {
                ...state,
                items: {
                    ...state.items,
                    [state.categoryId]: state.items[state.categoryId].map(item => item.id === action.item.id ? {
                        ...item,
                        fetching: true
                    } : item)
                }
            };
        case DELETED_DISH:
            return {
                ...state,
                items: {
                    ...state.items,
                    [state.categoryId]: state.items[state.categoryId].filter(item => item.id !== action.item.id)
                }
            };
        case SET_DISH_VALUE:
            return {
                ...state,
                items: {
                    ...state.items,
                    [state.categoryId]: state.items[state.categoryId].map(item => {
                        return item === action.item ? {
                            ...item,
                            [action.field]: action.field === 'price' ? +action.value : action.value
                        } : item;
                    })
                }
            };
        case MANIPULATE_DISH_IMAGE:
            return {
                ...state,
                items: {
                    ...state.items,
                    [state.categoryId]: state.items[state.categoryId].map(item => {
                        if(action.saveId && item.saveId === action.saveId || item === action.item) {
                            return image(item, action);
                        }
                        return item;
                    })
                }
            };
        default:
            return state;
    }
}
