import {cleanObj, formUrl, getHeaders, handleResponse} from './helpers';

function getKeys(item) {
    const keys = ['name'];
    if(item.password) {
        return [...keys, 'password'];
    }
    return keys;
}
export class UserService {
    constructor(dispatch, state) {
        this.dispatch = dispatch;
        this.state = state;
    }

    get() {
        return fetch(formUrl('users'))
            .then(res => handleResponse(res, this.dispatch));
    }

    delete(id) {
        return fetch(formUrl(`users/${id}`), {
            method: 'delete',
            headers: getHeaders(this.state)
        })
            .then(res => handleResponse(res, this.dispatch));
    }

    create(item) {
        console.log(item);
        return fetch(formUrl('users'), {
            method: 'POST',
            body: JSON.stringify(cleanObj(getKeys(item), item)),
            headers: getHeaders(this.state)
        })
            .then(res => handleResponse(res, this.dispatch));
    }

    update(item) {
        return fetch(formUrl(`users/${item.id}`), {
            method: 'PUT',
            body: JSON.stringify(cleanObj(getKeys(item), item)),
            headers: getHeaders(this.state)
        })
            .then(res => handleResponse(res, this.dispatch));
    }
}
