import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card/Card.js";

function App() {
  const [persons, setPersons] = useState([]);
  // const [dane, setDane] = useState([]);

  const getPersons = () => {
    return fetch("http://localhost:3000/persons")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  };

  const fetchData = () => {
    getPersons().then((data) => {
      setPersons(data);
    });
  };

  useEffect(() => {
    // const data = async () => {
    //   const response = await fetch("http://localhost:3000/persons");
    //   const apiData = await response.json();
    //   setDane(apiData);
    // };
    // data();

    fetchData();
  }, []);

  console.log(persons);

  return (
    <div className="style.wrapper">
      tekst
      {persons.map((person) => {
        return (
          <Card
            key={person.id}
            company={person.company}
            logo={person.logo}
            tags={person.tools.concat(person.languages)}
            info={{
              contract: person.contract,
              postedAt: person.postedAt,
              location: person.location,
            }}
          ></Card>
        );
      })}
    </div>
  );
}

export default App;
