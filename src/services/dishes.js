export function getDishes(categoryId) {
  const url = new URL(`${process.env.REACT_APP_HOST_API}/dishes`);
  url.search = new URLSearchParams({categoryId});
  return fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error();
    });
}
