import { useContext } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPost } from "../../api/fetchData";
import { LoginContext } from "../../contexts/LoginContext";
import CommentForm from "../CommentForm";
import style from "./Post.module.css";

function Post() {
  const [post, setPost] = useState({});
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const { id } = useParams();

  async function getData() {
    const _posts = await fetchPost(id);
    setPost(_posts);
  }

  useEffect(() => {
    getData();
  }, [id]);

  const login = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <>
      <button onClick={login}>Log in</button>
      <div className={style.post}>
        <span className={style["post--title"]}>{post.title}</span>
        <span className={style["post--body"]}>{post.body}</span>
      </div>
      {isLoggedIn ?? <CommentForm />}
    </>
  );
}

export default Post;
