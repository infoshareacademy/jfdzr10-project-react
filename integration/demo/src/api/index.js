import { API_URL } from '../const';

// export const getPersons = async () => {
//   try {
//     const request = await fetch(`${API_URL}/persons`, {
//       crossDomain: true,
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//     });
//     const data = await request.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const getPersons = () => {
  return fetch(`${API_URL}/persons`, {
    crossDomain: true,
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
    
};
