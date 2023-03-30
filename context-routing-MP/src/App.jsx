import { Route, Routes } from "react-router-dom";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { PostDetails } from "./Pages/PostDetails";
import { Posts } from "./Pages/Posts";
import { MainWrapper } from "./components/MainWrapper";
import { StyledHeader } from "./components/Header";
import { AddPost } from "./Pages/AddPost";

function App() {
	return (
		<MainWrapper>
			<StyledHeader />
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/posts" element={<Posts />}>
						Posts
					</Route>
					<Route path="/posts/:id" element={<PostDetails />} />
					<Route path="/add" element={<AddPost />} />
				</Routes>
			</div>
		</MainWrapper>
	);
}

export default App;
