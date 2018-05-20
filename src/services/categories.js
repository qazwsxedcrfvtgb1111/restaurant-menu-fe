export function getCategories() {
    return fetch(`${process.env.REACT_APP_HOST_API}/categories`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error();
        });
}
