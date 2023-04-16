import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { useAuth } from "../hooks/useAuth/useAuth";

export const Home = () => {
	const { toggleIsAuth } = useAuth();

	const login = () => {
		toggleIsAuth();
	};

	return (
		<div>
			<Header />
			<button onClick={() => login()}>login</button>
			Strona startowa
			<Content />
			<Footer />
		</div>
	);
};
