import { useState, useEffect } from 'react';
import './App.css';
import { getPersons } from './api';
import { Box } from './components/box/Box';
import style from './App.module.css';

export const App = () => {
  const [persons, setPersons] = useState([]);

  // const fetchData = async () => {
  //   const result = await getPersons();
  //   setPersons(result);
  // };

   const fetchData = () => {
     getPersons().then((data) => {
      setPersons(data);
     });
   };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={style.wrapper}>
        {persons &&
          persons.map((person) => {
            return (
              <Box
                key={person?.id}
                company={person?.company}
                logo={person?.logo}
                position={person?.position}
                tags={person?.tools.concat(person?.languages)}
                info={{ contract: person?.contract, postedAt: person?.postedAt, location: person?.location }}
              />
            );
          })}
      </div>
    </>
  );
};