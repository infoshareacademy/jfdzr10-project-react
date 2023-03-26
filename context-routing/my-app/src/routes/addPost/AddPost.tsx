import { useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useAddPost } from './AddPost.hooks';
import { useAuth } from '../../hooks/useAuth/useAuth';
import { AddPostProps } from './AddPost.types';

export const AddPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState<string>('');
  const { isAuth } = useAuth();

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const resetTitle = () => setTitle('');
  const handleBody = (e: React.ChangeEvent<HTMLInputElement>) => setBody(e.target.value);
  const resetBody = () => setBody('');

  const data : AddPostProps = {
    title,
    body,
    resetTitle,
    resetBody,
  };

  const { fetchData } = useAddPost(data);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <>
      {isAuth ? (
        <div>
          <Header />
          <h1>Dodaj nowy post</h1>

          <form onSubmit={handleSubmit}>
            <input type='text' value={title} placeholder='Tytuł postu' onChange={handleTitle} />
            <input type='text' value={body} placeholder='Treść postu' onChange={handleBody} />
            <button type='submit'>Dodaj posta</button>
          </form>
          <Footer />
        </div>
      ) : (
        <div>Prosze się zalogować</div>
      )}
    </>
  );
};
