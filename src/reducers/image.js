import {RESET_IMAGE, SET_IMAGE, SET_IMAGE_FAILED, SET_IMAGE_URL} from '../actions/images';

export function image(state, action) {
    switch (action.subType) {
        case SET_IMAGE:
            return {...state, fetching: true, saveId: action.saveId};
        case SET_IMAGE_FAILED:
            return {...state, fetching: false, errors: 'img upload failed'};
        case RESET_IMAGE:
            return {...state, img: ''};
        case SET_IMAGE_URL:
            return {...state, img: action.url, fetching: false};
        default:
            return state;
    }
}
