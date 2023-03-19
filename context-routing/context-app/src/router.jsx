import { createBrowserRouter } from "react-router-dom";
import AddPost from "./components/AddPost";
import Blog from "./components/Blog";
import PostsList from "./components/PostsList";
import Post from "./components/Post";
import HomePage from "./components/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/add-post",
    element: <AddPost />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/posts",
    element: <PostsList />,
  },
  {
    path: "/posts/:id",
    element: <Post />,
  },
]);
