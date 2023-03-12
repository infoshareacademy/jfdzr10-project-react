import { API_URL } from "./url";

export const getData = () => {
	return fetch(`${API_URL}/persons`)
		.then((response) => response.json())
		.then((data) => {
			return data;
		});
};
