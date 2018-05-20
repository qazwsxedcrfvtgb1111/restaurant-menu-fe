export function getToken(credentials) {
    return fetch(`${process.env.REACT_APP_HOST_API}/auth`, {
        method: 'post',
        body: JSON.stringify(credentials),
        headers: {'Content-Type': 'application/json'}
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error();
        });
}