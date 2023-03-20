import React from 'react';
import ReactDOM from 'react-dom';
// import libraries to routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import subsites components
import { Home } from './routes/Home'; // Home /
import { About } from './routes/About'; // /about
import { Contact } from './routes/Contact';
import { Posts } from './routes/Posts';
import { Post } from './routes/Post';
import { AddPost } from './routes/addPost/AddPost';

import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './providers/auth/AuthProvider';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/o-nas' element={<About />} />
          <Route path='/kontakt' element={<Contact />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='/dodaj-post' element={<AddPost />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
