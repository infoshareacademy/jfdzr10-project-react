import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { API_URL } from '../const';

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = () => {
    return fetch(API_URL)
      .then((response) => response.json())
      .then((response) => setPosts(response));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderPosts = () =>
    posts.map((post) => {
      const postUrl = `/post/${post.id}`;

      return (
        <div key={post.id}>
          <Link to={postUrl}>{post.title}</Link>
        </div>
      );
    });

  return (
    <div>
      <Header />
      <h1>Lista Postów:</h1>
      {renderPosts()}
    </div>
  );
};
