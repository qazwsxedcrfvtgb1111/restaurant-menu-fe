import {ImageService} from '../services/ImageService';

export const SET_IMAGE = 'SET_IMAGE';
export const SET_IMAGE_FAILED = 'SET_IMAGE_FAILED';
export const SET_IMAGE_URL = 'SET_IMAGE_URL';
export const RESET_IMAGE = 'RESET_IMAGE';

export function setImage(image, type, item) {
    return (dispatch, getState) => {
        const saveId = Date.now();
        dispatch({subType: SET_IMAGE, item, type, saveId});
        new ImageService(dispatch, getState()).create(image)
            .then((res) => {
                dispatch({subType: SET_IMAGE_URL, url: res.url, saveId, type});
            })
            .catch(() => dispatch({subType: SET_IMAGE_FAILED, item, type}));
    };
}

export function removeImage(type, item) {
    return {subType: RESET_IMAGE, item, type};
}