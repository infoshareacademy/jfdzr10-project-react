import { Route, Routes } from 'react-router-dom';

import { Home } from '../routes/Home'; // Home /
import { About } from '../routes/About'; // /about
import { Contact } from '../routes/Contact';
import { Posts } from '../routes/Posts';
import { Post } from '../routes/Post';
import { AddPost } from '../routes/addPost/AddPost';




import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => (
  <Routes>
    <Route path={AppRoute.home} element={<Home />} />
    <Route path={AppRoute.about} element={<About />} />
    <Route path={AppRoute.contact} element={<Contact />} />
    <Route path={AppRoute.posts} element={<Posts />} />
    <Route path={AppRoute.post} element={<Post />} />
    <Route path={AppRoute.addPost} element={<AddPost />} />
  </Routes>
);
