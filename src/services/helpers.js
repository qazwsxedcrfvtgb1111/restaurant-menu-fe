import {forgetToken} from '../actions/auth';
import {URL, URLSearchParams} from 'whatwg-url';

export function handleResponse(res, dispatch) {
    if (res.status === 401) {
        dispatch(forgetToken());
        throw new Error('Unauthorized');
    }
    if (res.ok) {
        return res.json();
    }
    console.log('err', res);
    throw new Error(res.json().errors || 'Request failed');
}

export function getHeaders(state, custom = {}, setContentType = true) {
    return {
        Authorization: `Bearer ${state.auth.token}`,
        ...(setContentType ? {'Content-Type': 'application/json'} : {}),
        ...custom
    };
}

export function cleanObj(keys, obj) {
    const res = {};
    for (const [key, val] of Object.entries(obj)) {
        if (keys.includes(key)) {
            res[key] = val;
        }
    }
    return res;
}

export function formUrl(query, params) {
    const url = new URL(`${process.env.REACT_APP_HOST_API}/${query}`);
    url.search = new URLSearchParams(params);
    return url;
}