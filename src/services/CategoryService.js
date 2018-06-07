import {cleanObj, formUrl, getHeaders, handleResponse} from './helpers';

const keys = ['img', 'title', 'description'];

export class CategoryService {
    constructor(dispatch, token) {
        this.dispatch = dispatch;
        this.token = token;
    }

    get() {
        return fetch(formUrl('categories'))
            .then(res => handleResponse(res, this.dispatch));
    }

    delete(id) {
        return fetch(formUrl(`categories/${id}`), {
            method: 'delete',
            headers: getHeaders(this.token)
        })
            .then(res => handleResponse(res, this.dispatch));
    }

    create(item) {
        return fetch(formUrl('categories'), {
            method: 'POST',
            body: JSON.stringify(cleanObj(keys, item)),
            headers: getHeaders(this.token)
        })
            .then(res => handleResponse(res, this.dispatch));
    }

    update(item) {
        return fetch(formUrl(`categories/${item.id}`), {
            method: 'PUT',
            body: JSON.stringify(cleanObj(keys, item)),
            headers: getHeaders(this.token)
        })
            .then(res => handleResponse(res, this.dispatch));
    }
}
