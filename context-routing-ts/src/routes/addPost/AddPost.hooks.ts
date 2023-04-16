import { API_URL } from '../../const';

export const useAddPost = (title, body, setTitle, setBody) => {
  const fetchData = () => {
    fetch(API_URL, {
      method: 'post',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
        title,
        body,
      },
    }).then((res) => {
      setTitle('');
      setBody('');
    });
  };
  return { fetchData };
};
