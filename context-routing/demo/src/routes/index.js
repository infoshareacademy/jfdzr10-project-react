export const fetchDataTest = (setPosts) => {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((response) => setPosts(response));
};
