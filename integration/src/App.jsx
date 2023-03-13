import { ListItem } from "./components/ListItem";
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
							logo={person?.logo}
							title={person?.position}
							postedAt={person?.postedAt}
							contract={person?.contract}
							location={person?.location}
							tags={[...person?.languages].concat([...person?.tools])}
						/>
					);
				})}
		</ul>
	);
}

export default App;
