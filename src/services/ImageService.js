import {formUrl, getHeaders, handleResponse} from './helpers';

export class ImageService {
    constructor(dispatch, token) {
        this.dispatch = dispatch;
        this.token = token;
    }

    create(item) {
        const form = new FormData();
        form.append('image', item);
        return fetch(formUrl('images'), {
            method: 'POST',
            body: form,
            headers: getHeaders(this.token, {}, false)
        })
            .then(res => handleResponse(res, this.dispatch));
    }
}
