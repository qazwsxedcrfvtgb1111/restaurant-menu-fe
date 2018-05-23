export function replaceById(items, toReplace, newParams) {
    return items.map(item => item.id === toReplace.id ? {...item, ...newParams} : item);
}

export function replaceByEquality(items, toReplace, newParams) {
    return items.map(item => {
        return item === toReplace ? {...item, ...newParams} : item;
    });
}

export function removeById(items, toRemove) {
    return items.filter(item => item.id !== toRemove.id);
}

export function removeByEquality(items, toRemove) {
    return items.filter(item => item !== toRemove);
}

