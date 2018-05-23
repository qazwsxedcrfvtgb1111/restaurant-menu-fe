import {formUrl, getHeaders, handleResponse} from './helpers';

export class ImageService {
    constructor(dispatch, state) {
        this.dispatch = dispatch;
        this.state = state;
    }

    create(item) {
        const form = new FormData();
        form.append('image', item);
        return fetch(formUrl('images'), {
            method: 'POST',
            body: form,
            headers: getHeaders(this.state, {}, false)
        })
            .then(res => handleResponse(res, this.dispatch));
    }
}