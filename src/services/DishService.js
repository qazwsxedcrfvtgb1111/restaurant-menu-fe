import {cleanObj, formUrl, getHeaders, handleResponse} from './helpers';

const keys = ['img', 'title', 'description', 'price', 'categoryId'];

export class DishService {
    constructor(dispatch, token) {
        this.dispatch = dispatch;
        this.token = token;
    }

    get(categoryId) {
        return fetch(formUrl('dishes', {categoryId}))
            .then(res => handleResponse(res, this.dispatch));
    }

    delete(id) {
        return fetch(formUrl(`dishes/${id}`), {
            method: 'delete',
            headers: getHeaders(this.token)
        })
            .then(res => handleResponse(res, this.dispatch));
    }

    create(item) {
        return fetch(formUrl('dishes'), {
            method: 'POST',
            body: JSON.stringify(cleanObj(keys, item)),
            headers: getHeaders(this.token)
        })
            .then(res => handleResponse(res, this.dispatch));
    }

    update(item) {
        return fetch(formUrl(`dishes/${item.id}`), {
            method: 'PUT',
            body: JSON.stringify(cleanObj(keys, item)),
            headers: getHeaders(this.token)
        })
            .then(res => handleResponse(res, this.dispatch));
    }
}
