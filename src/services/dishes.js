import {formUrl} from './helpers';

export function getDishes(categoryId) {
    return fetch(formUrl('dishes', {categoryId}))
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error();
        });
}
