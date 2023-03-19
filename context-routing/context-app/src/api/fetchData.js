import axios from "axios";
export async function fetchPosts() {
  let posts = [];
  await axios.get("https://jsonplaceholder.typicode.com/posts/").then((res) => {
    posts = res.data;
  });
  return posts;
}
export async function fetchPost(id) {
  let post = {};
  await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => {
      post = res.data;
    });
  return post;
}
export async function uploadComment(data) {
  return true;
}
export async function uploadPost(data) {
  await axios.post("https://jsonplaceholder.typicode.com/posts", data);
}
