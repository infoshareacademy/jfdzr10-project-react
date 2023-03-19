import { useEffect, useState } from "react";
import { fetchPosts } from "../../api/fetchData";
import { Link } from "react-router-dom";
import style from "./PostsList.module.css";

function PostsList() {
  const [posts, setPosts] = useState([]);

  async function getData() {
    const _posts = await fetchPosts();
    setPosts(_posts);
  }

  useEffect(() => {
    getData();
  });

  const renderPosts = () =>
    posts.map((post, idx) => (
      <Link key={idx} to={`/posts/${post.id}`}>
        <div className={style.post}>
          <span className={style["post--title"]}>{post.title}</span>
          <span className={style["post--body"]}>{post.body}</span>
        </div>
      </Link>
    ));

  return (
    <div className="App">
      <h1>PostList</h1>
      {renderPosts()}
    </div>
  );
}

export default PostsList;
