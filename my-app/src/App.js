import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import List from "./components/List";
import GlobalStyles from "./styles/GlobalStyles";
import { TEXTS } from "./data/translation";
import { users } from "./data/users";

function App() {
	return (
		<>
			<GlobalStyles />
			<Header title={TEXTS.TITLE} />
			<Content>
				<List list={users} />
			</Content>
			<Footer text1={TEXTS.FOOTER.TEXT1} text2={TEXTS.FOOTER.TEXT2} />
		</>
	);
}

export default App;
