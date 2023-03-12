import { ListItem } from "./ListItem";
import { getData } from "./api/getData";
import { useState, useEffect } from "react";

function App() {
	const [persons, setPersons] = useState([]);

	const fetchData = () => {
		getData().then((data) => setPersons(data));
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<ul>
			{persons &&
				persons.map((person) => {
					return (
						<ListItem
							key={crypto.randomUUID()}
							company={person?.company}
							isNew={person?.new}
						/>
					);
				})}
		</ul>
	);
}

export default App;
